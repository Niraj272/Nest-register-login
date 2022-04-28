import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { coursesProviders } from './courses.providers';
import { CoursesService } from './courses.service';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService,...coursesProviders]
})
export class CoursesModule {}
