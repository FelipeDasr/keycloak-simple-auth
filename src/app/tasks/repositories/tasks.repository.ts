import { CreateTaskDTO } from '../dtos/create-task.dto';
import { UpdateTaskDTO } from '../dtos/update-task.dto';
import { TaskEntity } from '../entities/tasks.entity';

export abstract class TasksRepository {
  public abstract create(
    userId: string,
    task: CreateTaskDTO,
  ): Promise<TaskEntity>;

  public abstract findAll(userId: string): Promise<TaskEntity[]>;

  public abstract findOwnerId(id: number): Promise<string | null>;

  public abstract findOne(userId: string, id: number): Promise<TaskEntity>;

  public abstract update(id: number, task: UpdateTaskDTO): Promise<void>;

  public abstract delete(id: number): Promise<void>;
}
