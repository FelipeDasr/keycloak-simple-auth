import { ApiProperty } from '@nestjs/swagger';
import { Task } from '@prisma/client';

export class TaskEntity implements Task {
  @ApiProperty({
    description: 'ID da tarefa',
    example: 1,
    type: 'integer',
  })
  id: number;

  @ApiProperty({
    description: 'ID do usuário',
    example: '9c1226f4-8669-43c7-ba9b-f9dc612dc86a',
    type: 'string',
  })
  owner_id: string;

  @ApiProperty({
    description: 'Título da tarefa',
    example: 'Título da tarefa',
    type: 'string',
  })
  title: string;

  @ApiProperty({
    description: 'Conteúdo da tarefa',
    example: 'Conteúdo da tarefa',
    type: 'string',
  })
  content: string;

  @ApiProperty({
    description: 'Status da tarefa',
    enum: ['todo', 'doing', 'done'],
    example: 'todo',
  })
  status: string;

  @ApiProperty({
    description: 'Data de criação da tarefa',
    example: '2021-09-01T00:00:00.000Z',
  })
  created_at: Date;

  @ApiProperty({
    description: 'Data de atualização da tarefa',
    example: '2021-09-01T00:00:00.000Z',
  })
  updated_at: Date;
}
