import { Body, Controller, Post } from '@nestjs/common';
import { RegisterRequestDto } from './dto/register.request.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
    constructor(private readonly registerService: RegisterService) {}
    
    @Post()
    async create(@Body() requestDto: RegisterRequestDto): Promise<any> {
      
     const data = await this.registerService.register(requestDto);
     return { data , message: 'REGISTERED_SUCCESS' };
     
    }
}
