import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConsoleLogger, VersioningType } from '@nestjs/common';
import { EnvService } from './core/env/env.service';
import { filters } from './core/filters';
import { pipes } from './core/pipes';
import { swaggerFactory } from './core/swagger';
import { patchNestJsSwagger } from 'nestjs-zod';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(EnvService);

  //Cors
  app.enableCors({
    origin: configService.get('CORS_ORIGINS'),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  // Base configs
  app.setGlobalPrefix('api');

  // Versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  // Loggers
  app.useLogger(
    new ConsoleLogger('my-service-name', {
      logLevels: configService.get('LOG_LEVELS'),
      prefix: 'my-service-name',
    }),
  );

  // Swagger
  patchNestJsSwagger();

  SwaggerModule.setup('swagger', app, swaggerFactory(app), {
    jsonDocumentUrl: 'swagger/json',
  });

  // Filters
  app.useGlobalFilters(...filters);

  // Pipes
  app.useGlobalPipes(...pipes);

  await app.listen(configService.get('PORT'));
}

void bootstrap();
