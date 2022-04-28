import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { COURSE_REPOSITORY } from 'src/core/constants';
import { Course } from 'src/modules/courses/courses.entity';
import { LoginRequestDto } from './dto/login.request.dto';

@Injectable()
export class LoginService {
    constructor(@Inject(COURSE_REPOSITORY) private readonly courseRepository: typeof Course) { }

    async login(loginDto: LoginRequestDto):Promise<any>{
        const user : Course = await this.courseRepository.findOne({where:{ email: loginDto.email }}); 
        if (!user) {
            throw new BadRequestException('Your login information was incorrect. Please check and try again.');
          }
         
         try {
             if(loginDto.password==user.password){
                 return "login suceessfully";
             }else{
                 return "incorrect password";
             }
        } catch (error) {
            throw new BadRequestException('Your login information was incorrect. Please check and try again.');
         } 

      
    }
}
