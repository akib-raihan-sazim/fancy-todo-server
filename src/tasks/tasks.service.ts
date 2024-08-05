import { Injectable, InternalServerErrorException } from "@nestjs/common";

import { TasksRepository } from "./tasks.repository";
import { Task } from "../common/entities/task.entity";
import { CreateTaskDto } from "./dtos/create-task.dto";

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    try {
      return await this.tasksRepository.createOne(createTaskDto);
    } catch (error) {
      throw new InternalServerErrorException(
        "Failed to create task",
        error.message,
      );
    }
  }

  async findAllTasks(): Promise<Task[]> {
    return await this.tasksRepository.findAll();
  }

  async findOne(id: number): Promise<Task | null> {
    return await this.tasksRepository.findOneOrFail(id);
  }

  async deleteTask(id: number): Promise<void> {
    const task = await this.tasksRepository.findOneOrFail({ id });
    await this.tasksRepository.removeTask(task);
  }
}
