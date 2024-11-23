import { Injectable } from '@nestjs/common';
import { CreateTaskDTO } from '../../dtos/create-task.dto';
import { TasksRepository } from '../../repositories/tasks.repository';

@Injectable()
export class CreateTaskUseCase {
  constructor(private readonly taskRepository: TasksRepository) {}

  public async execute(userId: string, taskData: CreateTaskDTO) {
    return await this.taskRepository.create(userId, taskData);
  }
}
