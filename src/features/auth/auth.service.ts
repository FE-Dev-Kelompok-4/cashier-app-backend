import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginPayloadDTO, AuthTokensDTO, LogoutPayloadDTO } from './dtos';
import { PasswordHasher } from 'src/helpers';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenPayloadDTO } from './dtos/refresh-token.payload.dto';
import { UsersRepository } from 'src/datasources/repositories/users.repository';
import { AuthenticationsRepository } from 'src/datasources/repositories/auth.repository';
import { Authentication } from 'src/datasources/entities/auth.entity';
import { JwtPayloadDTO } from 'src/helpers/types/jwt-payload.dto';
import { REFRESH_TOKEN_KEY } from 'src/helpers/env';

@Injectable()
export class AuthenticationsService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersRepository: UsersRepository,
    private readonly authRepository: AuthenticationsRepository,
  ) {}

  async loginUser(payload: LoginPayloadDTO): Promise<AuthTokensDTO> {
    const { username, password } = payload;

    const user = await this.usersRepository.getUserByUsername(username);
    if (!user) throw new BadRequestException('Invalid username');

    const isPasswordVerified = await PasswordHasher.verifyPassword(
      password,
      user.password,
    );
    if (!isPasswordVerified)
      throw new UnauthorizedException('Invalid password');

    const newAuth = new Authentication();
    newAuth.user = user;

    const addedAuthId = await this.authRepository.createAuthentication(newAuth);

    return this.generateTokens(username, user.id, addedAuthId);
  }

  async updateAccessToken(
    payload: RefreshTokenPayloadDTO,
  ): Promise<AuthTokensDTO> {
    const { refreshToken } = payload;

    this.verifyRefreshToken(refreshToken);

    const tokenPayload: JwtPayloadDTO = this.jwtService.decode(
      refreshToken,
    ) as JwtPayloadDTO;

    const session = await this.authRepository.getAuth(
      tokenPayload.jti,
      tokenPayload.sub,
    );

    if (!session) {
      throw new BadRequestException('User is already logged out');
    }

    const newAccessToken = this.generateAccessToken(
      tokenPayload.sub,
      tokenPayload.username,
    );

    const result = new AuthTokensDTO();
    result.accessToken = newAccessToken;

    return result;
  }

  async logoutUser(payload: LogoutPayloadDTO): Promise<void> {
    const { refreshToken } = payload;

    this.verifyRefreshToken(refreshToken);

    const tokenPayload: JwtPayloadDTO = this.jwtService.decode(
      refreshToken,
    ) as JwtPayloadDTO;

    await this.authRepository.deleteAuth(tokenPayload.jti);
  }

  private generateTokens(
    username: string,
    subject: string,
    jwtid: string,
  ): AuthTokensDTO {
    const options = { jwtid, subject };
    const refreshToken = this.jwtService.sign(
      { username },
      { ...options, secret: REFRESH_TOKEN_KEY },
    );

    const accessToken = this.generateAccessToken(subject, username);

    return { accessToken, refreshToken };
  }

  private generateAccessToken(subject: string, username: string): string {
    const accessToken = this.jwtService.sign(
      { username },
      {
        subject,
        expiresIn: 60 * 10,
      },
    );
    return accessToken;
  }

  private verifyRefreshToken(refreshToken: string) {
    try {
      this.jwtService.verify(refreshToken, { secret: REFRESH_TOKEN_KEY });
    } catch {
      throw new BadRequestException('Invalid refresh token');
    }
  }
}
