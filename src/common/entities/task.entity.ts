import { Entity, PrimaryKey, Property, Enum } from "@mikro-orm/core";

import { ETaskPriority } from "../enums/task.enum";

@Entity()
export class Task {
  @PrimaryKey()
  id!: number;

  @Property({ fieldName: "title" })
  title!: string;

  @Property({ fieldName: "summary" })
  summary!: string;

  @Property({ type: "date", nullable: true, fieldName: "due_date" })
  dueDate: Date | null = null;

  @Enum({ items: () => ETaskPriority, fieldName: "priority" })
  priority!: ETaskPriority;

  @Property({ fieldName: "completed", default: false })
  completed: boolean = false;
}
