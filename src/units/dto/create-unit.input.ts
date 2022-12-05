import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUnitInput {
  @Field()
  name!: string;
  @Field()
  email?: string;
  @Field()
  phone?: string;
}
