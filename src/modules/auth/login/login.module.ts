import { Module } from '@nestjs/common';
import { coursesProviders } from 'src/modules/courses/courses.providers';
import { JwtHelper } from 'src/utils/jwt.helper';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService,...coursesProviders,JwtHelper]
})
export class LoginModule {}
