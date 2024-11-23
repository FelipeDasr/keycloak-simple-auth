import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CreateTaskUseCase } from 'src/app/tasks/use-cases/create-task/create-task.use-case';
import { FindAllTasksByUserUseCase } from 'src/app/tasks/use-cases/find-all-tasks-by-user/find-all-tasks-by-user.use-case';
import { FindTaskByIdUseCase } from 'src/app/tasks/use-cases/find-task-by-id/find-task-by-id.use-case';
import { UpdateTaskUseCase } from 'src/app/tasks/use-cases/update-task-by/update-task-by.use-case';
import { DeleteTaskByIdUseCase } from 'src/app/tasks/use-cases/delete-task-by-id/delete-task-by-id.use-case';
import { TasksController } from './controllers/tasks.controller';
import { CheckTaskOwnerUseCase } from 'src/app/tasks/use-cases/check-task-owner/check-task-owner.use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController],
  providers: [
    CheckTaskOwnerUseCase,
    CreateTaskUseCase,
    FindTaskByIdUseCase,
    FindAllTasksByUserUseCase,
    UpdateTaskUseCase,
    DeleteTaskByIdUseCase,
  ],
})
export class HttpModule {}
