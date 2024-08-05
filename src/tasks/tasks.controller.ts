import {
  Controller,
  Post,
  Body,
  InternalServerErrorException,
  Get,
} from "@nestjs/common";

import { TasksService } from "./tasks.service";
import { Task } from "../common/entities/task.entity";
import { CreateTaskDto } from "./dtos/create-task.dto";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    try {
      return await this.tasksService.createTask(createTaskDto);
    } catch (error) {
      throw new InternalServerErrorException(
        "Failed to create task",
        error.message,
      );
    }
  }

  @Get()
  async findAllTasks(): Promise<Task[]> {
    return await this.tasksService.findAllTasks();
  }
}
