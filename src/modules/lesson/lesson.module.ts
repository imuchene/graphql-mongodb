import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Lesson, LessonSchema } from './schemas/lesson.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
    { name: Lesson.name, schema: LessonSchema }
  ]),
],
  providers: [
    LessonResolver, 
    LessonService
  ],
})
export class LessonModule {}
