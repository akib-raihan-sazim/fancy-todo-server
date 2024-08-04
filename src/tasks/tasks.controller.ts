import {
  Controller,
  Post,
  Body,
  InternalServerErrorException,
  Get,
  Param,
  Delete,
  Put,
  Patch,
} from "@nestjs/common";

import { TasksService } from "./tasks.service";
import { Task } from "../common/entities/task.entity";
import { CreateTaskDto, UpdateTaskDto } from "./tasks.dtos";

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

  @Get(":id")
  async findTaskById(@Param("id") id: number): Promise<Task | null> {
    return this.tasksService.findOne(id);
  }

  @Delete("completed")
  async removeAllCompletedTasks(): Promise<void> {
    return await this.tasksService.removeCompletedTasks();
  }

  @Delete(":id")
  async deleteTask(@Param("id") id: number): Promise<void> {
    return await this.tasksService.deleteTask(id);
  }

  @Put(":id")
  async updateTask(@Param("id") id: string, @Body() taskData: UpdateTaskDto) {
    return this.tasksService.updateTask(Number(id), taskData);
  }

  @Patch(":id/complete")
  async toggleCompletion(@Param("id") id: number): Promise<Task> {
    return this.tasksService.toggleCompletion(id);
  }
}
