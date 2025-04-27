import { Injectable, Logger } from '@nestjs/common';
import { CreateOrgDto } from './entities/create-organization.dto';
import { OrgId, OrgEntity } from './entities/organization.entity';

@Injectable()
export class OrganizationService {
  private readonly orgs: OrgEntity[] = [];
  private readonly logger = new Logger(OrganizationService.name);

  create(createOrgDto: CreateOrgDto): OrgEntity | undefined {
    const id = (this.orgs.length + 1).toString();

    this.logger.log(`Creating post with ID: ${id}`);

    this.orgs.push({
      ...createOrgDto,
      id,
    });

    return this.findOne(id);
  }

  findAll(): OrgEntity[] {
    return this.orgs;
  }

  findOne(id: OrgId) {
    this.logger.log(`Getting organization with ID: ${id}`);
    return this.orgs.find((post) => post.id === id);
  }
}
