import {
    Controller,
    Post,
    HttpCode,
    Body,
} from '@nestjs/common';
import {
    ApiOkResponse,
    ApiTags,
} from '@nestjs/swagger';
import {
    UserLoginRequestDto
} from './dto/userLoginRequest.dto';
import {
    UserService
} from './user.service';
import {
    UserLoginResponseDto
} from './dto/userLoginResponse.dto';

@ApiTags('user')
@Controller('users')
export class UserController {

    constructor(private readonly usersService: UserService) {}

    @Post('login')
    @HttpCode(200)
    @ApiOkResponse({ type: UserLoginResponseDto })
    login(
        @Body() userLoginRequestDto: UserLoginRequestDto,
    ): Promise<UserLoginResponseDto> {
        return this.usersService.login(userLoginRequestDto);
    }
}
