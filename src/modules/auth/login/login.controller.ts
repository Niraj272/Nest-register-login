import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { LoginRequestDto } from './dto/login.request.dto';
import { LoginService } from './login.service';
import { Response } from 'express';
import { Course } from 'src/modules/courses/courses.entity';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) { }
    
    @Post()
    async login(@Body() LoginRequestDto: LoginRequestDto,@Res({passthrough: true}) response: Response): Promise<Course> {
        const data = await this.loginService.login(LoginRequestDto,response);
        // console.log(request.cookies);
        
        return data;
    }
}
