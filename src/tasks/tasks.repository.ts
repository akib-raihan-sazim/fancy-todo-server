import { EntityRepository, EntityManager } from "@mikro-orm/core";
import { Injectable } from "@nestjs/common";

import { Task } from "../common/entities/task.entity";

@Injectable()
export class TasksRepository extends EntityRepository<Task> {
  constructor(em: EntityManager) {
    super(em, Task);
  }

  async createOne(taskData: Partial<Task>): Promise<Task> {
    const task = this.create(taskData);
    await this.em.persistAndFlush(task);
    return task;
  }

  async removeTask(task: Task): Promise<void> {
    await this.em.removeAndFlush(task);
  }

  async updateOne(task: Task, taskData: Partial<Task>): Promise<Task> {
    this.assign(task, taskData);
    await this.em.flush();
    return task;
  }

  async removeCompletedTasks(tasks: Task[]): Promise<void> {
    await this.em.removeAndFlush(tasks);
  }

  async toggleCompletion(task: Task): Promise<Task> {
    await this.em.flush();
    return task;
  }
}
