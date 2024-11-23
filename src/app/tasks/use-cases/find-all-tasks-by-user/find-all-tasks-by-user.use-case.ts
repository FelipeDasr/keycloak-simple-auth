import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../../repositories/tasks.repository';

@Injectable()
export class FindAllTasksByUserUseCase {
  constructor(private readonly taskRepository: TasksRepository) {}

  public async execute(userId: string) {
    return this.taskRepository.findAll(userId);
  }
}
