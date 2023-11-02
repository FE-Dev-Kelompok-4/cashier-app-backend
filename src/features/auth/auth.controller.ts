import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { AuthenticationsService } from './auth.service';
import { ResponseWrapper } from 'src/helpers';
import { LoginPayloadDTO, LogoutPayloadDTO } from './dtos';
import { RefreshTokenPayloadDTO } from './dtos/refresh-token.payload.dto';

@Controller('auth')
export class AuthenticationsController {
  constructor(private readonly authService: AuthenticationsService) {}

  @Post()
  async postAuthentication(
    @Body() payload: LoginPayloadDTO,
  ): Promise<ResponseWrapper> {
    const result = await this.authService.loginUser(payload);
    return ResponseWrapper.success('User successfully logged in', result);
  }

  @Put()
  async putAuthenticaton(@Body() payload: RefreshTokenPayloadDTO) {
    const result = await this.authService.updateAccessToken(payload);
    return ResponseWrapper.success('Token successfully updated', result);
  }

  @Delete()
  async deleteAuthentication(
    @Body() payload: LogoutPayloadDTO,
  ): Promise<ResponseWrapper> {
    await this.authService.logoutUser(payload);
    return ResponseWrapper.success('User successfully logged out');
  }
}
