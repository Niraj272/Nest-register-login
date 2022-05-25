import { BadRequestException, Inject, Injectable, Req, Res, UnauthorizedException } from '@nestjs/common';
import { COURSE_REPOSITORY } from 'src/core/constants';
import { JwtTokenInterface } from 'src/interfaces/jwt.token.interface';
import { Course } from 'src/modules/courses/courses.entity';
import { JwtHelper } from 'src/utils/jwt.helper';
import { LoginRequestDto } from './dto/login.request.dto';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';


@Injectable()
export class LoginService {
    JwtService: any;
    jwtService: any;
    // this is variable name :courseRepository
    // courseRepository: typeof Course =>> courseRepository refers to this course
    constructor(@Inject(COURSE_REPOSITORY) private readonly courseRepository: typeof Course,
        private readonly jwtToken: JwtHelper
    ) { }

    async login(loginDto: LoginRequestDto, @Res({ passthrough: true }) response: Response): Promise<any> {  
        const user: Course = await this.courseRepository.findOne({ where: { email: loginDto.email } });
        if (!user) {
            throw new BadRequestException('Your login information was incorrect. Please check and try again.');
        }
        const tokenDto: JwtTokenInterface = {
            id: user.id,
            email: user.email
        }
        //console.log(loginDto.password);console.log(user.password);
        //console.log(await bcrypt.compare(loginDto.password, user.password));
        try {
            if (await bcrypt.compare(loginDto.password, user.password)) {
                const token = await this.jwtToken.generateToken(tokenDto)
                response.cookie('token', token, { httpOnly: true })
                return { token: token };
            } else {
                return "incorrect password"
            }
        } catch (error) {
            throw new BadRequestException('Your login ------information was incorrect. Please check and try again.');
        }
    }

}
