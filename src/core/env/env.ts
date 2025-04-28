import { z } from 'zod';
import { LogLevel } from '@nestjs/common';
import { warn } from 'console';

export const envSchema = z.object({
  PORT: z.coerce.number(),
  LOG_LEVELS: z.string().transform((val) => val.split(',') as LogLevel[]),
  CORS_ORIGINS: z.string().transform((val) => val.split(',')),
  WEBHOOK_URL: z.string().url(),
});

export type Env = z.infer<typeof envSchema>;
