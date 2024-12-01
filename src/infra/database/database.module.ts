import { Module } from '@nestjs/common';
import { TasksRepository } from 'src/app/tasks/repositories/tasks.repository';
import { PrismaTasksRepository } from './prisma/repositories/tasks.repository';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: TasksRepository,
      useClass: PrismaTasksRepository,
    },
  ],
  exports: [TasksRepository],
})
export class DatabaseModule {}
