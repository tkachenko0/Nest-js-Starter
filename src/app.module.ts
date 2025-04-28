import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './core/middlewares/logger.middleware';
import { UsersModule } from './features/users/users.module';
import { FlagsModule } from './features/flags/flags.module';
import { CommonModuleModule } from './core/common-module/common-module.module';
import { ImagesModule } from './features/images/images.module';

@Module({
  imports: [CommonModuleModule, UsersModule, FlagsModule, ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}
