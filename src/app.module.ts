import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CoursesModule } from './modules/courses/courses.module';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import {AuthModule} from './modules/auth/auth.module'
import { LoggerMiddleware } from './middleware/logger.middleware';
import { UserImgModule } from './modules/user-img/user-img.module';
import { userProviders } from './modules/user-img/user.providers';

 
@Module({
imports: [ CoursesModule, DatabaseModule, AuthModule ,ConfigModule.forRoot({ isGlobal: true }),UserImgModule]

})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('courses')
      // .forRoutes({path:'courses',method:RequestMethod.GET})
  }
}
