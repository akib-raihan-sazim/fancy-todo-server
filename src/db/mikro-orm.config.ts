import { Options } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

const config: Options = {
  driver: PostgreSqlDriver,
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "1234",
  dbName: "to-do",
  entities: ["dist/**/*.entity.js"],
  entitiesTs: ["src/**/*.entity.ts"],
  migrations: {
    path: "src/db/migrations",
  },
};

export default config;
