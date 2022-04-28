import { Injectable , Inject, ConflictException } from '@nestjs/common';
import { COURSE_REPOSITORY } from '../../../core/constants';
import { Course } from '../../courses/courses.entity';
import {RegisterRequestDto} from './dto/register.request.dto'

@Injectable()
export class RegisterService {
    constructor(@Inject(COURSE_REPOSITORY) private readonly courseRepository: typeof Course) { }

    async register(requestDto: RegisterRequestDto){
        //demonstrat register body
        const email = requestDto.email.toLowerCase();
        //check email is already exist or not
        const user = await this.courseRepository.findOne({attributes: ['email'] , where:{ email }});
        if (user && user.email.toLowerCase() == email)
        {
            throw new ConflictException('ACCOUNT EXISTS')
        }

          const newUser =  await this.courseRepository.create(requestDto);
          return newUser;
        
    }
}
