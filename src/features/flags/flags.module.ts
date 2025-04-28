import { Module } from '@nestjs/common';
import { FlagsController } from './flags.controller';

@Module({
  controllers: [FlagsController],
  providers: [],
})
export class FlagsModule {}
