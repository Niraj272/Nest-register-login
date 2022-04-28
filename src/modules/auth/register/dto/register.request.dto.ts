import { IsNotEmpty, IsString, MaxLength, MinLength,IsEmail } from "class-validator";

export class RegisterRequestDto {
    @IsString()
    @MaxLength(25)
    @IsNotEmpty()
    readonly name: string;
    
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
    
    @MinLength(8)
    @MaxLength(24)
    @IsNotEmpty()
    readonly password: string;
    
    @IsNotEmpty()
    @IsString()
    readonly gender: string;
}