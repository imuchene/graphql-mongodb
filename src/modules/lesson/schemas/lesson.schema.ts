import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";


export type LessonDocument = HydratedDocument<Lesson>

@Schema()
export class Lesson {

  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);