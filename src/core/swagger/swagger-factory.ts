import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('Next.js Template API')
  .setDescription('The API description')
  .build();

export const swaggerFactory = (app: INestApplication) =>
  SwaggerModule.createDocument(app, config);
