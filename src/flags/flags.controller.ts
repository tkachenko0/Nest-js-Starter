import { Controller, Post, Body } from '@nestjs/common';
import axios from 'axios';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const flagSchema = z.object({
  flagName: z.string(),
  teamName: z.string(),
});

class FlagDto extends createZodDto(flagSchema) {}

@Controller('flags')
export class FlagsController {
  private readonly webhookUrl =
    'https://discord.com/api/webhooks/1366427446181761135/yofJhI1mwsaRHFCSmtnIwDIAqIxrzUBOOuSCsIBV3DkkKj0-jkjBqQvKvAq3sb07LZpP';

  private getRandomFunnyMessage() {
    const messages = [
      "That was fast! Someone's been practicing! 🏃‍♂️💨",
      'I hope you don’t cheat, but... that was impressive! 🤨😲',
      "Wow, you're really good at this! Too good! 🏆🥇",
      'Do you have a cheat code? Just kidding, nice work! 🎮😉',
      'Flag collected faster than I can blink! 👀⚡',
      'You guys are like the Flash! ⚡💨',
    ];

    return messages[Math.floor(Math.random() * messages.length)];
  }

  @Post('flag1')
  async flag1(@Body() body: FlagDto) {
    const { flagName, teamName } = body;
    const message = `${teamName} has collected the flag ${flagName}! ${this.getRandomFunnyMessage()}`;
    await axios.post(this.webhookUrl, { content: message });
    return { message: 'Flag 1 message sent!' };
  }

  @Post('flag2')
  async flag2(@Body() body: FlagDto) {
    const { flagName, teamName } = body;
    const message = `${teamName} has collected the flag ${flagName}! ${this.getRandomFunnyMessage()}`;
    await axios.post(this.webhookUrl, { content: message });
    return { message: 'Flag 2 message sent!' };
  }

  @Post('flag3')
  async flag3(@Body() body: FlagDto) {
    const { flagName, teamName } = body;
    const message = `${teamName} has collected the flag ${flagName}! ${this.getRandomFunnyMessage()}`;
    await axios.post(this.webhookUrl, { content: message });
    return { message: 'Flag 3 message sent!' };
  }

  @Post('flag4')
  async flag4(@Body() body: FlagDto) {
    const { flagName, teamName } = body;
    const message = `${teamName} has collected the flag ${flagName}! ${this.getRandomFunnyMessage()}`;
    await axios.post(this.webhookUrl, { content: message });
    return { message: 'Flag 4 message sent!' };
  }
}
