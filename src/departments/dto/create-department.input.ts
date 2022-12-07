import { InputType, Field, Int } from '@nestjs/graphql';
import { Unit } from './../../units/entities/unit.entity';

@InputType()
export class CreateDepartmentInput {
  @Field()
  name: string;
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true })
  email?: string;
  @Field()
  initials: string;
  @Field(() => Int)
  unitid: number;
}
