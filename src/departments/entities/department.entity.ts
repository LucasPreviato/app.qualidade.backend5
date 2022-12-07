import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Unit } from './../../units/entities/unit.entity';

@ObjectType()
@Entity()
export class Department {
  @Field(() => Int)
  @PrimaryKey()
  id: number;
  @Field()
  @Property({ unique: true })
  name: string;
  @Field({ nullable: true })
  @Property()
  description?: string;
  @Field(() => Date)
  @Property()
  createdAt: Date;
  @Field({ nullable: true })
  @Property()
  email?: string;
  @Field()
  @Property({ unique: true })
  initials: string;
  @Field(() => Unit)
  @ManyToOne()
  unitid: Unit;
}
