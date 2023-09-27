import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lesson } from './schemas/lesson.schema';
import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './inputs/lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectModel(Lesson.name)
    private readonly lessonModel: Model<Lesson>,
  ) {}

  async createLesson(
    createLessonInput: CreateLessonInput
  ): Promise<Lesson> {
    const { name, startDate, endDate } = createLessonInput;
    const createdLesson = new this.lessonModel({
      id: uuid(),
      name,
      startDate,
      endDate,
    });
    return await createdLesson.save();
  }

  async getLesson(id: string): Promise<Lesson> {
    return await this.lessonModel.findOne({ id });
  }

  async getAllLessons(): Promise<Lesson[]> {
    return await this.lessonModel.find().exec();
  }
}
