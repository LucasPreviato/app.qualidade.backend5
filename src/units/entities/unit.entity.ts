import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Unit {
  @Field(() => Int)
  @PrimaryKey()
  id: number;
  @Field()
  @Property({ unique: true })
  name!: string;
  @Field()
  @Property({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  @Property()
  phone?: string;
}
