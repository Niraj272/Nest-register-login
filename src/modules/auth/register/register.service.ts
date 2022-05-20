import { Injectable , Inject, ConflictException } from '@nestjs/common';
import { COURSE_REPOSITORY } from '../../../core/constants';
import { Course } from '../../courses/courses.entity';
import {RegisterRequestDto} from './dto/register.request.dto'
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegisterService {
    constructor(@Inject(COURSE_REPOSITORY) private readonly courseRepository: typeof Course) { }

    async register(requestDto: RegisterRequestDto){
        //demonstrat register body
        const password = requestDto.password;
        const email = requestDto.email.toLowerCase();
      
        //check email is already exist or not
        const user = await this.courseRepository.findOne({attributes: ['email'] , where:{ email }});
        if (user && user.email.toLowerCase() == email)
        {
            throw new ConflictException('ACCOUNT EXISTS')
        }
        
       try {
        const salt = 10;
        const hashedPassword = await bcrypt.hash(password,salt);

          const newUser =  await this.courseRepository.create({
            name:requestDto.name,
            email:requestDto.email,
            password:hashedPassword,
            gender:requestDto.gender, 
          });
        
            return newUser;
       } catch (error) {
           return error;
       }
       
        
    }
}
