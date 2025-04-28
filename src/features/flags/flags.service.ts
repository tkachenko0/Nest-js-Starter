import { Injectable } from '@nestjs/common';

@Injectable()
export class FlagsService {
  private collectedFlags: Map<string, Set<string>> = new Map(); // Track collected flags per team

  private flags = new Map<number, string>([
    [1, 'SAIBORG-FLAG-77777'],
    [2, 'SAIBORG-FLAG-TRV3L'],
    [3, 'SAIBORG-FLAG-SE132'],
    [4, 'SAIBORG-FLAG-ULA42'],
  ]);

  isFlagAlreadyCollected(flagNumber: number, teamName: string): boolean {
    return !!(
      this.collectedFlags.has(teamName) &&
      this.collectedFlags.get(teamName)?.has(`${flagNumber}`)
    );
  }

  markFlagAsCollected(flagNumber: number, teamName: string) {
    if (!this.collectedFlags.has(teamName)) {
      this.collectedFlags.set(teamName, new Set());
    }
    this.collectedFlags.get(teamName)?.add(`${flagNumber}`);
  }

  isExpectedFlag(flagNumber: number, flagName: string): boolean {
    const expectedFlag = this.flags.get(flagNumber);
    return (
      !!expectedFlag &&
      (!!expectedFlag.toLowerCase().includes(flagName.toLowerCase()) ||
        !!flagName.toLowerCase().includes(expectedFlag.toLowerCase()))
    );
  }

  stats(): Record<string, number> {
    const stats: Record<string, number> = {};

    this.collectedFlags.forEach((collectedSet, teamName) => {
      const collectedFlags = collectedSet.size;
      stats[teamName] = collectedFlags;
    });

    return stats;
  }
}
