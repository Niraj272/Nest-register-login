import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { LoginRequestDto } from './dto/login.request.dto';
import { LoginService } from './login.service';
import { Response } from 'express';
import { Course } from 'src/modules/courses/courses.entity';

@Controller()
export class LoginController {
    constructor(private readonly loginService: LoginService) { }
    
    @Post('login')
    async login(@Body() LoginRequestDto: LoginRequestDto,@Res({passthrough: true}) response: Response): Promise<Course> {
        const data = await this.loginService.login(LoginRequestDto,response);
        // console.log(request.cookies);
        
        return data;
    }
    // For clear cookie in postman(After a clear cookie when we try to get something in Get route it will   @Post('logout')
    @Post('logout')
    async logout(@Res({passthrough: true}) response: Response){
        response.clearCookie('jwt');
        return {
            message: 'Success'
          }
    }

}
