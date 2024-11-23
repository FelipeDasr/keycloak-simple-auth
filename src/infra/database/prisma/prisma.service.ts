import {
  INestApplication,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    try {
      await this.$connect();

      return console.log('\nDatabase:', 'DataBase connected\n');
    } catch (error) {
      console.error(
        '\nDatabase:',
        `Error connecting to database: ${error.message}\n`,
      );

      process.exit(1);
    }
  }

  async onModuleDestroy() {
    try {
      await this.$disconnect();
    } catch (error) {
      console.error(
        '\nDatabase:',
        `Error disconnecting from database: ${error.message}\n`,
      );
    }
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit' as never, async () => {
      await app.close();
      return console.log('\nDatabase:', 'Database shutdown\n');
    });
  }
}
