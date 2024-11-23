import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
// import { Roles } from 'nest-keycloak-connect';
import { CreateTaskDTO } from 'src/app/tasks/dtos/create-task.dto';
import { TaskIdDTO } from 'src/app/tasks/dtos/task-id.dto';
import { UpdateTaskDTO } from 'src/app/tasks/dtos/update-task.dto';
import { TaskEntity } from 'src/app/tasks/entities/tasks.entity';
import { CreateTaskUseCase } from 'src/app/tasks/use-cases/create-task/create-task.use-case';
import { DeleteTaskByIdUseCase } from 'src/app/tasks/use-cases/delete-task-by-id/delete-task-by-id.use-case';
import { FindAllTasksByUserUseCase } from 'src/app/tasks/use-cases/find-all-tasks-by-user/find-all-tasks-by-user.use-case';
import { FindTaskByIdUseCase } from 'src/app/tasks/use-cases/find-task-by-id/find-task-by-id.use-case';
import { UpdateTaskUseCase } from 'src/app/tasks/use-cases/update-task-by/update-task-by.use-case';

const tempUserId = 'tempUserId';

@ApiTags('Tasks')
@ApiBearerAuth()
// @Roles({ roles: ['manage-account'] })
@Controller('tasks')
export class TasksController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly findTaskUseCase: FindTaskByIdUseCase,
    private readonly findAllTasksUseCase: FindAllTasksByUserUseCase,
    private readonly updateTaskUseCase: UpdateTaskUseCase,
    private readonly deleteTaskUseCase: DeleteTaskByIdUseCase,
  ) {}

  @ApiOperation({
    description: 'Criar tarefa',
  })
  @ApiResponse({
    description: 'Criado com sucesso!',
    status: HttpStatus.OK,
    type: TaskEntity,
  })
  @HttpCode(HttpStatus.OK)
  @Post()
  public async create(@Body() data: CreateTaskDTO) {
    return await this.createTaskUseCase.execute(tempUserId, data);
  }

  @ApiOperation({
    description: 'Buscar tarefa por ID',
  })
  @ApiResponse({
    description: 'Dados retornados com sucesso',
    status: HttpStatus.OK,
    type: TaskEntity,
  })
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  public async findById(@Param() params: TaskIdDTO) {
    return await this.findTaskUseCase.execute(tempUserId, params.id);
  }

  @ApiOperation({
    description: 'Buscar todas as tarefas',
  })
  @ApiResponse({
    description: 'Dados retornados com sucesso',
    status: HttpStatus.OK,
    type: [TaskEntity],
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  public async findAll() {
    return await this.findAllTasksUseCase.execute(tempUserId);
  }

  @ApiOperation({
    description: 'Atualizar tarefa',
  })
  @ApiResponse({
    description: 'Atualizado com sucesso!',
    status: HttpStatus.NO_CONTENT,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch(':id')
  public async update(@Param() params: TaskIdDTO, @Body() data: UpdateTaskDTO) {
    return await this.updateTaskUseCase.execute(tempUserId, params.id, data);
  }

  @ApiOperation({
    description: 'Deletar tarefa',
  })
  @ApiResponse({
    description: 'Deletado com sucesso!',
    status: HttpStatus.NO_CONTENT,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  public async delete(@Param() params: TaskIdDTO) {
    return await this.deleteTaskUseCase.execute(tempUserId, params.id);
  }
}
