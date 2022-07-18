import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import {
    User
} from '../User';

export const SECRET_KEY = 'secret';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {


    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: SECRET_KEY,
        });
    }

    async validate(payload, done: VerifiedCallback) {

        const user = payload.username == User.username;
        if (!user) {
            return done(new HttpException({}, HttpStatus.UNAUTHORIZED), false);
        }

        return done(null, user, payload.iat);
    }
}