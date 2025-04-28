import { Injectable } from '@nestjs/common';
import { DiscordService } from 'src/core/common-module/discord/discord.service';
import { EnvService } from 'src/core/common-module/env/env.service';

@Injectable()
export class FlagsService {
  private collectedFlags: Set<string> = new Set();

  private flags = new Map<number, string>([
    [1, 'flag1'],
    [2, 'flag2'],
    [3, 'flag3'],
  ]);

  constructor(
    private readonly discordService: DiscordService,
    private readonly envService: EnvService,
  ) {}

  isFlagAlreadyCollected(flagNumber: number, teamName: string): boolean {
    return this.collectedFlags.has(`${flagNumber}-${teamName}`);
  }

  markFlagAsCollected(flagNumber: number, teamName: string) {
    this.collectedFlags.add(`${flagNumber}-${teamName}`);
  }

  isExpectedFlag(flagNumber: number, flagName: string): boolean {
    const expectedFlag = this.flags.get(flagNumber);
    return flagName == expectedFlag;
  }
}
