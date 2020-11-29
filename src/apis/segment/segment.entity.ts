import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Segment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;
}
