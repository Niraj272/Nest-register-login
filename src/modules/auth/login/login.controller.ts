import { Body, Controller, Post } from '@nestjs/common';
import { LoginRequestDto } from './dto/login.request.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) { }
    
    @Post()
    async login(@Body() LoginRequestDto: LoginRequestDto): Promise<any> {
        const data = await this.loginService.login(LoginRequestDto);
        return data;
    }
}
