import { Module } from "@nestjs/common";
import { MikroOrmModule } from "@mikro-orm/nestjs";

import { TasksModule } from "./tasks/tasks.module";
import config from "./db/mikro-orm.config";

@Module({
  imports: [MikroOrmModule.forRoot(config), TasksModule],
})
export class AppModule {}
