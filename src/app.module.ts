import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';

import { HttpModule } from './infra/http/http.module';
import {
  AuthGuard,
  KeycloakConnectModule,
  RoleGuard,
} from 'nest-keycloak-connect';

@Module({
  imports: [
    HttpModule,
    KeycloakConnectModule.register({
      authServerUrl: process.env.KEYCLOAK_AUTH_URL,
      realm: process.env.KEYCLOAK_REALM,
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      secret: process.env.KEYCLOAK_SECRET,
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
