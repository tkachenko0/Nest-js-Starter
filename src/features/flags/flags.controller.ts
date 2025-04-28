import { Controller, Post, Body } from '@nestjs/common';
import { FlagDto } from './dto/flags.dto';
import { FlagsService } from './flags.service';

@Controller('flags')
export class FlagsController {
  constructor(private readonly flagsService: FlagsService) {}

  @Post('flag1')
  flag1(@Body() body: FlagDto) {
    return this.flagsService.sendFlagMessage(1, body);
  }

  @Post('flag2')
  flag2(@Body() body: FlagDto) {
    return this.flagsService.sendFlagMessage(2, body);
  }

  @Post('flag3')
  flag3(@Body() body: FlagDto) {
    return this.flagsService.sendFlagMessage(3, body);
  }

  @Post('flag4')
  flag4(@Body() body: FlagDto) {
    return this.flagsService.sendFlagMessage(4, body);
  }
}
