import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const createImageSchema = z.object({
  apiKey: z.string(),
  prompt: z.string(),
});

export class CreateImageDto extends createZodDto(createImageSchema) {}
