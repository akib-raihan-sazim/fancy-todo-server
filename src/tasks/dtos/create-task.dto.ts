import {
  IsString,
  IsEnum,
  IsBoolean,
  IsOptional,
  IsDate,
} from "class-validator";
import { Transform } from "class-transformer";

import { ETaskPriority } from "src/common/enums/task.enum";

export class CreateTaskDto {
  @IsString()
  title!: string;

  @IsString()
  summary!: string;

  @IsDate()
  @IsOptional()
  @Transform(({ value }) => (value ? new Date(value) : null))
  dueDate: Date | null;

  @IsEnum(ETaskPriority)
  priority!: ETaskPriority;

  @IsBoolean()
  @IsOptional()
  completed?: boolean = false;
}
