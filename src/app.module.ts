import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CoursesModule } from './modules/courses/courses.module';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import {AuthModule} from './modules/auth/auth.module'
import { LoggerMiddleware } from './middleware/logger.middleware';

 
@Module({
  imports: [ CoursesModule, DatabaseModule, AuthModule ,ConfigModule.forRoot({ isGlobal: true })]

})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('courses')
      // .forRoutes({path:'courses',method:RequestMethod.GET})
  }
}
