import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import {
    User
} from '../User';

export class UserLoginRequestDto {
    @ApiProperty({
        default: User.username
    })
    @IsEmail()
    readonly username: string;

    @ApiProperty({
        default: User.password
    })
    @IsString()
    readonly password: string;
}
