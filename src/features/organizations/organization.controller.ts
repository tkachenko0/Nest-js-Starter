import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrgDto } from './entities/create-organization.dto';
import { OrgId } from './entities/organization.entity';
// import { EnvService } from 'src/core/env/env.service';

@Controller('orgs')
export class OrganizationController {
  private readonly logger: Logger = new Logger(OrganizationController.name);

  constructor(
    private readonly orgService: OrganizationService,
    // private readonly envService: EnvService,
  ) {}

  @Get()
  findAllV1() {
    this.logger.log('Getting all organizations');
    return this.orgService.findAll();
  }

  @Post()
  create(@Body() createOrgDto: CreateOrgDto) {
    return this.orgService.create(createOrgDto);
  }

  @Get(':orgId')
  findOne(@Param('orgId') orgId: OrgId) {
    const post = this.orgService.findOne(orgId);
    if (!post) throw new NotFoundException('Organization not found');
    return post;
  }
}
