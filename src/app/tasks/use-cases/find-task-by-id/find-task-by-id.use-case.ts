import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../../repositories/tasks.repository';

@Injectable()
export class FindTaskByIdUseCase {
  constructor(private readonly taskRepository: TasksRepository) {}

  public async execute(userId: string, taskId: number) {
    return this.taskRepository.findOne(userId, taskId);
  }
}
