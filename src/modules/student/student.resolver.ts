import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentType } from './types/student.type';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query(() => StudentType, { name: 'student' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.studentService.findOne(id);
  }

  @Query(() => [StudentType], { name: 'students' })
  async findAll() {
    return this.studentService.findAll();
  }


  @Mutation(() => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return await this.studentService.create(createStudentInput);
  }

  @Mutation(() => StudentType)
  updateStudent(
    @Args('updateStudentInput') updateStudentInput: UpdateStudentInput,
  ) {
    return this.studentService.update(
      updateStudentInput.id,
      updateStudentInput,
    );
  }

  @Mutation(() => StudentType)
  removeStudent(@Args('id', { type: () => Int }) id: string) {
    return this.studentService.remove(id);
  }
}
