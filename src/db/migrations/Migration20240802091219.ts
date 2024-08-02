import { Migration } from '@mikro-orm/migrations';

export class Migration20240802091219 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "task" ("id" serial primary key, "title" varchar(255) not null, "summary" varchar(255) not null, "due_date" date null, "priority" text check ("priority" in (\'High\', \'Medium\', \'Low\')) not null, "completed" boolean not null default false);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "task" cascade;');
  }

}
