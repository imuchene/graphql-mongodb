import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './inputs/lesson.input';

@Resolver((of: any) => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Query((returns) => LessonType)
  async lesson(@Args('id') id: string) {
    return await this.lessonService.getLesson(id);
  }

  @Mutation((returns) => LessonType)
  async createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return await this.lessonService.createLesson(createLessonInput);
  }

  @Query((returns) => [LessonType])
  async lessons() {
    return await this.lessonService.getAllLessons();
  }
}
