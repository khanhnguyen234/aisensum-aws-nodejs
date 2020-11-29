import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../common/base.entity';

@Entity()
export class SegmentCriteria extends BaseEntity {
  @Column()
  name: string;
}
