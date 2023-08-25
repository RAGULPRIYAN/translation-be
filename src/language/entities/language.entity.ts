import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
@Entity()
export class modtype {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  module: string;
}
@Entity()
export class languagetype {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  key: string;

  @Column({ nullable: true })
  tamilLang: string;

  @Column({ nullable: true })
  englishLang: string;

  @Column({ nullable: true })
  hindiLang: string;

  @ManyToOne(() => modtype, (md) => md.id)
  @JoinColumn({ name: 'moduleId' })
  moduleId: number;
}
