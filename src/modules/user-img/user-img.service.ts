import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constants';
import { User } from './user.entity';

@Injectable()
export class UserImgService {
    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User) { }

    async uploadimg(filepath:any,body) : Promise<any>{
        console.log(filepath);
        const userdata = {
            name:body.name,
            email:body.email,
            password:body.password,
            imgpath:filepath
        }

        return await this.userRepository.create(userdata);
    }
}
