import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../../helpers/decorators/roles.decorator';
import { AuthenticatedRequest } from 'src/helpers/types/authenticated-request';
import { Role } from 'src/helpers';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  public canActivate(context: ExecutionContext): boolean {
    const allowedRole = this.reflector.getAllAndOverride<Role>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!allowedRole) return true;

    const req: AuthenticatedRequest = context.switchToHttp().getRequest();
    if (req.user.role !== allowedRole)
      throw new ForbiddenException(
        "You don't have permission to access this resource",
      );

    return true;
  }
}
