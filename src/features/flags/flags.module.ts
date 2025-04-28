import { Module } from '@nestjs/common';
import { FlagsController } from './flags.controller';
import { DatabaseService } from 'src/core/db/database.service';
import { EnvModule } from 'src/core/env/env.module';

@Module({
  imports: [EnvModule],
  controllers: [FlagsController],
  providers: [DatabaseService],
})
export class FlagsModule {}
