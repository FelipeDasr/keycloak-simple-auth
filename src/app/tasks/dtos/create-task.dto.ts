import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDTO {
  @ApiProperty({
    description: 'Título da tarefa',
    example: 'Título da tarefa',
    type: 'string',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Conteúdo da tarefa',
    example: 'Conteúdo da tarefa',
    type: 'string',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  content: string;
}
