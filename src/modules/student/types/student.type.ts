import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType {
  @Field(() => ID, { description: 'Student ID' })
  id: string;

  @Field(() => String, { description: 'Student First Name' })
  firstName: string;

  @Field(() => String, { description: 'Student Last Name' })
  lastName: string;
}
