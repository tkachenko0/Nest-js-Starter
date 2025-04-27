import { BaseEntity } from 'src/core/models';

export class OrgEntity extends BaseEntity {
  public name: string;
  public description: string;
}

export type OrgId = OrgEntity['id'];
