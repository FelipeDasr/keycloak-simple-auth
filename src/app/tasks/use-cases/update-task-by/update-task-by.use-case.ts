import { Injectable } from '@nestjs/common';
import { UpdateTaskDTO } from '../../dtos/update-task.dto';
import { TasksRepository } from '../../repositories/tasks.repository';
import { CheckTaskOwnerUseCase } from '../check-task-owner/check-task-owner.use-case';

@Injectable()
export class UpdateTaskUseCase {
  constructor(
    private readonly taskRepository: TasksRepository,
    private readonly checkTaskOwnerUseCase: CheckTaskOwnerUseCase,
  ) {}

  public async execute(userId: string, taskId: number, data: UpdateTaskDTO) {
    await this.checkTaskOwnerUseCase.execute(userId, taskId);
    return this.taskRepository.update(taskId, data);
  }
}
