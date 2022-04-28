import { Module } from '@nestjs/common';
import { CoursesModule } from './modules/courses/courses.module';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import {AuthModule} from './modules/auth/auth.module'

 
@Module({
  imports: [ CoursesModule, DatabaseModule, AuthModule ,ConfigModule.forRoot({ isGlobal: true })]

})
export class AppModule {}
