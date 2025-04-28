import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('SAIBORG Flags API')
  .setDescription('The API description')
  .build();

export const swaggerFactory = (app: INestApplication) =>
  SwaggerModule.createDocument(app, config);
