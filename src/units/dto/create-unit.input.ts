import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateUnitInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name!: string;
  @Field()
  @IsEmail()
  @IsOptional()
  @IsString()
  email?: string;
  @Field()
  @IsString()
  @IsOptional()
  phone?: string;
}
