import { Module } from '@nestjs/common';
import { FlagsController } from './flags.controller';
import { CommonModuleModule } from 'src/core/common-module/common-module.module';
import { FlagsService } from './flags.service';

@Module({
  imports: [CommonModuleModule],
  controllers: [FlagsController],
  providers: [FlagsService],
})
export class FlagsModule {}
