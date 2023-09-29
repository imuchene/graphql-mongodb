import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './types/lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './inputs/lesson.input';
import { AssignStudentsToLessonInput } from './inputs/assign-students-to-lesson.input';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Query(() => LessonType)
  async lesson(@Args('id') id: string) {
    return await this.lessonService.getLesson(id);
  }

  @Query(() => [LessonType])
  async lessons() {
    return await this.lessonService.getAllLessons();
  }

  @Mutation(() => LessonType)
  async createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return await this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(() => LessonType)
  async assignStudentsToLesson(
    @Args('assignStudentsToLessonInput') assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ) {
    const { lessonId, studentIds } = assignStudentsToLessonInput;
    return await this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }
}
