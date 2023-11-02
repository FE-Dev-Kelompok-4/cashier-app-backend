import { Module } from '@nestjs/common';
import { AuthGuard } from './guards/auth-guard';
import { RolesGuard } from './guards/role-guard';

@Module({
  providers: [AuthGuard, RolesGuard],
})
export class CommonsModule {}
