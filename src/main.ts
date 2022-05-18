// import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './modules/courses/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //global prefix
  app.setGlobalPrefix('api/v1');
  // app.use(LoggerMiddleware);

  await app.listen(3000);
}
bootstrap();
