import { Module } from '@nestjs/common';
import { EnvModule } from './env/env.module';
import { DatabaseModule } from './db/database.module';
import { DiscordModule } from './discord/discord.module';

@Module({
  imports: [EnvModule, DatabaseModule, DiscordModule],
  providers: [],
  exports: [EnvModule, DatabaseModule, DiscordModule],
})
export class CommonModuleModule {}
