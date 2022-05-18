import { Injectable } from "@nestjs/common";
import { JwtTokenInterface } from "src/interfaces/jwt.token.interface";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtHelper{
    constructor(){}

    async generateToken(tokenDto : JwtTokenInterface): Promise<string>{
       const token  = jwt.sign(tokenDto,process.env.JWT_SECRET,{
           expiresIn : process.env.JWT_EXPIRED_TIME
       });
        return token;
    }

}