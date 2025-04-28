import { Injectable, OnModuleInit } from '@nestjs/common';
import { EnvService } from '../env/env.service';
import axios from 'axios';

@Injectable()
export class DiscordService implements OnModuleInit {
  private webhookUrl = '';

  constructor(private readonly envService: EnvService) {
    this.webhookUrl = this.envService.get('WEBHOOK_URL');
  }

  async sendMessage(message: string) {
    return await axios.post(this.webhookUrl, { content: message });
  }

  async sendMessageWithImage(message: string, imageUrl: string) {
    return await axios.post(this.webhookUrl, {
      content: message,
      embeds: [
        {
          image: {
            url: imageUrl,
          },
        },
      ],
    });
  }

  onModuleInit() {}
}
