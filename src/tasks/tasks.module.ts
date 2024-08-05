import { Module } from "@nestjs/common";
import { MikroOrmModule } from "@mikro-orm/nestjs";

import { TasksController } from "./tasks.controller";
import { TasksService } from "./tasks.service";
import { TasksRepository } from "./tasks.repository";
import { Task } from "../common/entities/task.entity";

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Task] })],
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
})
export class TasksModule {}
