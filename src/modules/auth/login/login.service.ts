import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { COURSE_REPOSITORY } from 'src/core/constants';
import { JwtTokenInterface } from 'src/interfaces/jwt.token.interface';
import { Course } from 'src/modules/courses/courses.entity';
import { JwtHelper } from 'src/utils/jwt.helper';
import { LoginRequestDto } from './dto/login.request.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
    // this is variable name :courseRepository
    // courseRepository: typeof Course =>> courseRepository refers to this course
    constructor(@Inject(COURSE_REPOSITORY) private readonly courseRepository: typeof Course,
        private readonly jwtToken: JwtHelper
    ) { }

    async login(loginDto: LoginRequestDto): Promise<any> {
        const user: Course = await this.courseRepository.findOne({ where: { email: loginDto.email } });
        if (!user) {
            throw new BadRequestException('Your login information was incorrect. Please check and try again.');
        }
        const tokenDto: JwtTokenInterface = {
            id: user.id,
            email: user.email
        }
        console.log(loginDto.email);
        console.log(user.password);

        console.log(await bcrypt.compare(loginDto.password, user.password));

        try {
            if (await bcrypt.compare(loginDto.password, user.password)) {
                const token = await this.jwtToken.generateToken(tokenDto)
                return { token: token };
            } else {
                return "incorrect password"
            }
        } catch (error) {
            throw new BadRequestException('Your login ------information was incorrect. Please check and try again.');
        }


    }
}
