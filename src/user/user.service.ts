import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserLoginRequestDto } from './dto/userLoginRequest.dto';
import { UserLoginResponseDto } from './dto/userLoginResponse.dto';
import { sign } from 'jsonwebtoken';
import { User } from './User';
import {
    IUser
} from './IUser';
import {
    SECRET_KEY
} from './auth/jwt-strategy';

@Injectable()
export class UserService {
    private readonly jwtPrivateKey: string = SECRET_KEY;

    async login(userLoginRequestDto: UserLoginRequestDto) {
        const username = userLoginRequestDto.username == User.username;
        const password = userLoginRequestDto.password == User.password;


        if (!username || !password) {
            throw new HttpException(
                'Invalid username or password.',
                HttpStatus.BAD_REQUEST,
            );
        }

        const token = await this.signToken(User);
        return new UserLoginResponseDto(User, token);
    }

    async signToken(user: IUser) {
        const payload: IUser = {
            username: user.username,
        };

        return sign(payload, this.jwtPrivateKey, {});
    }

}
