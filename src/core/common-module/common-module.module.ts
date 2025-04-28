import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvModule } from './env/env.module';
import { envSchema } from './env/env';
import { DatabaseModule } from './db/database.module';
import { DiscordModule } from './discord/discord.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    EnvModule,
    DatabaseModule,
    DiscordModule,
  ],
  providers: [],
  exports: [EnvModule, DatabaseModule, DiscordModule],
})
export class CommonModuleModule {}
