import { ApiProperty } from '@nestjs/swagger';

export class UserLoginResponseDto {
    @ApiProperty()
    token: string;

    constructor(user, token?: string) {
        this.token = token;
    }
}
