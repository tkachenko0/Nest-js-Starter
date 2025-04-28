import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const flagSchema = z.object({
  flagName: z.string(),
  teamName: z.string(),
});

export class FlagDto extends createZodDto(flagSchema) {}
