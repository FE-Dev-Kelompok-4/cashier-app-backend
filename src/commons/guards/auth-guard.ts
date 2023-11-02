import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import {
  ACCESS_TOKEN_KEY,
  JWT_ALGORITHM,
  JWT_AUDIENCE,
  JWT_ISSUER,
} from 'src/helpers/env';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    let token = request.headers?.authorization;

    if (!token) throw new UnauthorizedException('No token provided');

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    try {
      jwt.verify(token, ACCESS_TOKEN_KEY, {
        algorithms: [JWT_ALGORITHM],
        audience: JWT_AUDIENCE,
        issuer: JWT_ISSUER,
      });
    } catch (e) {
      if (e.name === 'TokenExpiredError')
        throw new UnauthorizedException('Token is expired');
      throw new UnauthorizedException('Invalid token');
    }

    const userData = jwt.decode(token);
    request.user = userData;

    return true;
  }
}
