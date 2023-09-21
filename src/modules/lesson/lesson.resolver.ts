import { Query, Resolver } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";

@Resolver((_of:any) => LessonType)
export class LessonResolver {
  @Query(_returns => LessonType)
  lesson(){
    return {
      id: '221aaass',
      name: 'Physics Class',
      startDate: (new Date()).toISOString(),
      endDate: (new Date()).toISOString(),
    }
  }
}