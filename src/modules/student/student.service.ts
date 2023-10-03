import { Injectable } from '@nestjs/common';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { v4 as uuid } from 'uuid';
import { Student } from './schemas/student.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: Model<Student>,
  ) {}

  async findOne(id: string): Promise<Student> {
    return await this.studentModel.findOne({ id });
  }

  async findAll(): Promise<Student[]> {
    return await this.studentModel.find();
  }

  async create(createStudentInput: CreateStudentInput): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const createdLesson = new this.studentModel({
      id: uuid(),
      firstName,
      lastName,
    });
    return await createdLesson.save();
  }

  update(id: string, updateStudentInput: UpdateStudentInput) {
    console.log('update student', updateStudentInput);
    return `This action updates a #${id} student`;
  }

  remove(id: string) {
    return `This action removes a #${id} student`;
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.studentModel.find({ id: studentIds });
  }
}
