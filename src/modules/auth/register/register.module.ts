import { Module } from '@nestjs/common';
import { coursesProviders } from 'src/modules/courses/courses.providers';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
  controllers: [RegisterController],
  providers: [RegisterService,...coursesProviders]
})
export class RegisterModule {}
