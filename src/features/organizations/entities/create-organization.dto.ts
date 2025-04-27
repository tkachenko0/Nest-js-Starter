import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const createOrgSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export class CreateOrgDto extends createZodDto(createOrgSchema) {}
