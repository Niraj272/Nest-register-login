import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';

 
@Module({
  imports: [ CoursesModule, DatabaseModule,ConfigModule.forRoot({ isGlobal: true })]

})
export class AppModule {}
