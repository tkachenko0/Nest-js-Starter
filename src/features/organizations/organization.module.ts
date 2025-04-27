import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { EnvModule } from 'src/core/env/env.module';

@Module({
  controllers: [OrganizationController],
  providers: [OrganizationService],
  imports: [EnvModule],
})
export class OrganizationModule {}
