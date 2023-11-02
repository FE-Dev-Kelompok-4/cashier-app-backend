import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CommonsModule } from 'src/commons/commons.module';
import { DatasourceModule } from 'src/datasources/datasource.module';
import { AuthenticationsService } from './auth.service';
import { AuthenticationsController } from './auth.controller';
import {
  ACCESS_TOKEN_KEY,
  JWT_ALGORITHM,
  JWT_AUDIENCE,
  JWT_ISSUER,
} from 'src/helpers/env';

@Module({
  imports: [
    JwtModule.register({
      secret: ACCESS_TOKEN_KEY,
      signOptions: {
        algorithm: JWT_ALGORITHM,
        issuer: JWT_ISSUER,
        audience: JWT_AUDIENCE,
      },
    }),
    DatasourceModule,
    CommonsModule,
  ],
  providers: [AuthenticationsService],
  controllers: [AuthenticationsController],
})
export class AuthenticationsModule {}
