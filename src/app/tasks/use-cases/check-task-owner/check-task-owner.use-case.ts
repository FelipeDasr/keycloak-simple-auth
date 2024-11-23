import { Injectable, NotFoundException } from '@nestjs/common';
import { TasksRepository } from '../../repositories/tasks.repository';

@Injectable()
export class CheckTaskOwnerUseCase {
  constructor(private readonly taskRepository: TasksRepository) {}

  public async execute(userId: string, taskId: number): Promise<void> {
    const taskOwnerId = await this.taskRepository.findOwnerId(taskId);

    if (taskOwnerId !== userId) {
      throw new NotFoundException('Nenhum registro encontrado');
    }
  }
}
