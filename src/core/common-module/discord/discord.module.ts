import { Module } from '@nestjs/common';
import { DiscordService } from './discord.service';
import { EnvModule } from '../env/env.module';

@Module({
  imports: [EnvModule],
  providers: [DiscordService],
  exports: [DiscordService],
})
export class DiscordModule {}
