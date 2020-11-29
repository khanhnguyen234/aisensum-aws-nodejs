import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../common/base.entity';

@Entity()
export class Segment extends BaseEntity {
  @Column()
  timeline: string;

  @Column('float')
  index: number;

  @Column('uuid')
  criteriaUuid: string;

  @Column('uuid')
  typeUuid: string;
}
