import { Module } from '@nestjs/common';
import { coursesProviders } from 'src/modules/courses/courses.providers';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService,...coursesProviders]
})
export class LoginModule {}
