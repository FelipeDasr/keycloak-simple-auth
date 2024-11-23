import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../../repositories/tasks.repository';
import { CheckTaskOwnerUseCase } from '../check-task-owner/check-task-owner.use-case';

@Injectable()
export class DeleteTaskByIdUseCase {
  constructor(
    private readonly taskRepository: TasksRepository,
    private readonly checkTaskOwnerUseCase: CheckTaskOwnerUseCase,
  ) {}

  public async execute(userId: string, taskId: number) {
    await this.checkTaskOwnerUseCase.execute(userId, taskId);
    await this.taskRepository.delete(taskId);
  }
}
