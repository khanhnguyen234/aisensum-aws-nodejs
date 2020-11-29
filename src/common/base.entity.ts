import {
  Column,
  PrimaryGeneratedColumn,
  Generated,
  BaseEntity as Entity,
} from 'typeorm';
import { Exclude } from 'class-transformer';

export class BaseEntity extends Entity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  @Generated('uuid')
  uuid: string;

  @Exclude()
  @Column({
    type: 'timestamp without time zone',
    default: () => 'now()::timestamp',
  })
  createdBy: string;

  @Exclude()
  @Column({
    type: 'timestamp without time zone',
    default: () => 'now()::timestamp',
  })
  updatedBy: string;

  constructor() {
    super();
  }

  public async transform(payload: any): Promise<any> {
    this.updatedBy = payload.updatedBy || this.updatedBy;
  }
}
