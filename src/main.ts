import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { getCorsConfig } from "./common/config/cors.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(getCorsConfig());

  await app.listen(3333);
}
bootstrap();
