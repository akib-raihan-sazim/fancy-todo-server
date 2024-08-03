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
}
