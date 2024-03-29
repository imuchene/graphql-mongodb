import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { Student, StudentSchema } from './schemas/student.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  providers: [StudentResolver, StudentService],
  exports: [StudentService],
})
export class StudentModule {}
