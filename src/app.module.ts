import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './core/middlewares/logger.middleware';
import { EnvModule } from './core/env/env.module';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './core/env/env';
import { UsersModule } from './features/users/users.module';
import { FlagsModule } from './features/flags/flags.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    EnvModule,
    UsersModule,
    FlagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}
