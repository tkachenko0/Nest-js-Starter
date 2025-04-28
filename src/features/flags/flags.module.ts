import { Module } from '@nestjs/common';
import { FlagsController } from './flags.controller';
import { CommonModuleModule } from 'src/core/common-module/common-module.module';

@Module({
  imports: [CommonModuleModule],
  controllers: [FlagsController],
  providers: [],
})
export class FlagsModule {}
