/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Body, Controller, Post } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import axios from 'axios';
import * as FormData from 'form-data';

@Controller('images')
export class ImagesController {
  @Post('generate')
  async generate(@Body() createImageDto: CreateImageDto) {
    const { apiKey, prompt } = createImageDto;

    const form = new FormData();
    form.append('prompt', prompt);

    try {
      const response = await axios.post(
        'https://clipdrop-api.co/text-to-image/v1',
        form,
        {
          headers: {
            ...form.getHeaders(),
            'x-api-key': apiKey,
          },
          responseType: 'arraybuffer', // important to get binary data
        },
      );

      return {
        image: Buffer.from(response.data, 'binary').toString('base64'),
      };
    } catch (error) {
      throw new Error(`Failed to generate image: ${error.message}`);
    }
  }
}
