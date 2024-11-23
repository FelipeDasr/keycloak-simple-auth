import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class TaskIdDTO {
  @ApiProperty({
    description: 'ID da tarefa',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @Transform(({ value }) => Number(value))
  id: number;
}
