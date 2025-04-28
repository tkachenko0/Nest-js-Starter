import { Controller, Post, Body, Get } from '@nestjs/common';
import { FlagDto } from './dto/flags.dto';
import { FlagsService } from './flags.service';
import { EnvService } from 'src/core/common-module/env/env.service';
import { DiscordService } from 'src/core/common-module/discord/discord.service';

@Controller('flags')
export class FlagsController {
  constructor(
    private readonly flagsService: FlagsService,
    private readonly discordService: DiscordService,
    private readonly envService: EnvService,
  ) {}

  private getRandomFunnyMessage() {
    const messages = [
      "That was fast! Someone's been practicing!",
      'I hope you don’t cheat, but... that was impressive!',
      "Wow, you're really good at this! Too good!",
      'Do you have a cheat code? Just kidding, nice work!',
      'Flag collected faster than I can blink!',
      'You guys are like the Flash!',
    ];

    return messages[Math.floor(Math.random() * messages.length)];
  }

  private validateTeamName(teamName: string): boolean {
    const validTeamNames = this.envService.get('TEAM_NAMES');
    const isInside = validTeamNames.includes(teamName);
    return isInside;
  }

  async sendFlagMessage(flagNumber: number, body: FlagDto) {
    const { teamName, flagName } = body;
    if (!this.validateTeamName(teamName)) {
      return { message: 'Invalid team name!' };
    }

    if (flagNumber === 4 && !flagName.endsWith('.png')) {
      return { message: 'Flag 4 must end with .png!' };
    }

    if (!this.flagsService.isExpectedFlag(flagNumber, flagName)) {
      return { message: 'Incorrect flag!' };
    }

    if (this.flagsService.isFlagAlreadyCollected(flagNumber, teamName)) {
      return {
        message: `Flag ${flagNumber} has already been collected by ${teamName}.`,
      };
    }

    console.log('Received flag:', flagNumber, 'from team:', teamName);
    this.flagsService.markFlagAsCollected(flagNumber, teamName);

    if (flagNumber === 4) {
      const imageUrl = `https://nest-js-boilerplate-production.up.railway.app/uploads/${flagName}`;
      const message = `${teamName} has collected flag ${flagNumber}! 🎉`;
      console.log('Sending image message:', message);
      await this.discordService.sendMessageWithImage(message, imageUrl);
    } else {
      const message = `${teamName} has collected flag ${flagNumber}! ${this.getRandomFunnyMessage()}`;
      await this.discordService.sendMessage(message);
    }

    return { message: `Flag ${flagNumber} message sent!` };
  }

  @Get('flag1')
  flag1(@Body() body: FlagDto) {
    return {
      flag: 'SAIBORG-FLAG-77777',
    };
  }

  @Post('flag1')
  flag1(@Body() body: FlagDto) {
    return this.sendFlagMessage(1, body);
  }

  @Post('flag2')
  flag2(@Body() body: FlagDto) {
    return this.sendFlagMessage(2, body);
  }

  @Post('flag3')
  flag3(@Body() body: FlagDto) {
    return this.sendFlagMessage(3, body);
  }

  @Post('flag4')
  flag4(@Body() body: FlagDto) {
    return this.sendFlagMessage(4, body);
  }

  @Get('stats')
  getStats(): ReturnType<typeof this.flagsService.stats> {
    return this.flagsService.stats();
  }

  // @Post('send-discord-stats')
  // async sendStats(@Headers('password') password: string) {
  //   if (password !== 'viacheslav1234') {
  //     return { message: 'Invalid password!' };
  //   }
  //   const stats = this.flagsService.stats();
  //   const statsMessage = Object.entries(stats)
  //     .map(([teamName, collectedFlags]) => `${teamName}: ${collectedFlags}`)
  //     .join('\n');
  //   console.log(statsMessage);
  //   await this.discordService.sendMessage(
  //     `Current flag stats:\n${statsMessage}`,
  //   );
  // }
}
