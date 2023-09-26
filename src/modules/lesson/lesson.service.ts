import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lesson } from './schemas/lesson.schema';
import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
  constructor(
    @InjectModel(Lesson.name)
    private readonly lessonModel: Model<Lesson>,
  ){}

  async createLesson(name:string, startDate: string, endDate: string): Promise<Lesson> {
    const createdLesson = new this.lessonModel({ id: uuid(), name, startDate, endDate });
    return await createdLesson.save();
  }
}
