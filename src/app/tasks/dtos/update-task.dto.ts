import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDTO {
  @ApiProperty({
    description: 'Título da tarefa',
    example: 'Título da tarefa',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    description: 'Conteúdo da tarefa',
    example: 'Conteúdo da tarefa',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiProperty({
    description: 'Status da tarefa',
    enum: ['todo', 'doing', 'done'],
    example: 'todo',
  })
  @IsOptional()
  @IsEnum(['todo', 'doing', 'done'])
  status?: 'todo' | 'doing' | 'done';
}
