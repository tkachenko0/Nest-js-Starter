import { Injectable } from '@nestjs/common';
import { warn } from 'console';
import axios from 'axios';
import { EnvService } from 'src/core/common-module/env/env.service';
import { FlagDto } from './dto/flags.dto';

@Injectable()
export class FlagsService {
  private webhookUrl = '';

  constructor(private readonly envService: EnvService) {
    this.webhookUrl = this.envService.get('WEBHOOK_URL');
  }

  private getRandomFunnyMessage() {
    const messages = [
      "That was fast! Someone's been practicing! ┬¡ãÆ├à├ó├ö├ç├¼├ö├û├®┬┤┬®├à┬¡ãÆ├å┬┐",
      'I hope you don├ö├ç├ût cheat, but... that was impressive! ┬¡ãÆ├▒┬┐┬¡ãÆ├┐Ôûô',
      "Wow, you're really good at this! Too good! ┬¡ãÆ├à├Ñ┬¡ãÆ├æ├º",
      'Do you have a cheat code? Just kidding, nice work! ┬¡ãÆ├ä┬½┬¡ãÆ├┐├½',
      'Flag collected faster than I can blink! ┬¡ãÆ├ª├ç├ö├£├¡',
      'You guys are like the Flash! ├ö├£├¡┬¡ãÆ├å┬┐',
    ];

    return messages[Math.floor(Math.random() * messages.length)];
  }

  private validateTeamName(teamName: string): boolean {
    const validTeamNames = this.envService.get('TEAM_NAMES');
    const isInside = validTeamNames.includes(teamName);
    return isInside;
  }

  async sendFlagMessage(flagNumber: number, body: FlagDto) {
    const { teamName } = body;
    if (!this.validateTeamName(teamName)) {
      warn(`Invalid team name: ${teamName}`);
      return { message: 'Invalid team name!' };
    }
    const message = `${teamName} has collected flag ${flagNumber}! ${this.getRandomFunnyMessage()}`;
    await axios.post(this.webhookUrl, { content: message });
    return { message: `Flag ${flagNumber} message sent!` };
  }
}
