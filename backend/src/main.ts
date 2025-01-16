import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import mongoose from 'mongoose';
import { InternalServerErrorException, ValidationPipe } from '@nestjs/common';
import { MongooseConfigService } from './config/mongoose.config';
import { LoggerMiddleware } from './middlewares/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const connection = await new MongooseConfigService().onModuleInit();
  if (!connection) throw new InternalServerErrorException('DB not connected');

  const options = new DocumentBuilder()
    .setTitle('Shift Management')
    .setDescription('API Backend App')
    .setVersion('1.0')
    // .addTag('Prueba')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  
  app.use(LoggerMiddleware);
  //app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
