import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { TasksRepository } from 'src/app/tasks/repositories/tasks.repository';
import { CreateTaskDTO } from 'src/app/tasks/dtos/create-task.dto';
import { UpdateTaskDTO } from 'src/app/tasks/dtos/update-task.dto';
import { TaskEntity } from 'src/app/tasks/entities/tasks.entity';

@Injectable()
export class PrismaTasksRepository implements TasksRepository {
  constructor(private readonly db: PrismaService) {}

  public async create(
    owner_id: string,
    task: CreateTaskDTO,
  ): Promise<TaskEntity> {
    return await this.db.task.create({
      data: {
        ...task,
        status: 'todo',
        owner_id,
      },
    });
  }

  public async findOwnerId(id: number): Promise<string | null> {
    const task = await this.db.task.findUnique({
      where: { id },
      select: { owner_id: true },
    });

    return task?.owner_id || null;
  }

  public async findAll(userId: string): Promise<TaskEntity[]> {
    return await this.db.task.findMany({ where: { owner_id: userId } });
  }

  public async findOne(userId: string, id: number): Promise<TaskEntity> {
    return await this.db.task.findUnique({ where: { id, owner_id: userId } });
  }

  public async update(id: number, task: UpdateTaskDTO): Promise<void> {
    await this.db.task.update({
      where: { id },
      data: task,
    });
  }

  public async delete(id): Promise<void> {
    await this.db.task.delete({ where: { id } });
  }
}
