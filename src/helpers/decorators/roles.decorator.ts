import { CustomDecorator, SetMetadata } from '@nestjs/common';
import { Role } from '../constants';

export const ROLES_KEY = 'roles';
export const Roles = (role: Role): CustomDecorator =>
  SetMetadata(ROLES_KEY, role);
