import { Field, InputType } from "@nestjs/graphql";
import { IsDateString, IsNotEmpty, MinLength, isNotEmpty } from "class-validator";

@InputType()
export class CreateLessonInput {
  @MinLength(3)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;
}