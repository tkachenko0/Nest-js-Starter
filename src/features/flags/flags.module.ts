import { Module } from '@nestjs/common';
import { FlagsController } from './flags.controller';
import { DatabaseService } from 'src/core/db/database.service';

@Module({
  controllers: [FlagsController],
  providers: [DatabaseService],
})
export class FlagsModule {}
