import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import {
    User
} from './User';
import {
    UserService
} from './user.service';


describe('UsersController tests', () => {
    let controller: UserController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [
                UserService,
            ]
        }).compile();

        controller = module.get<UserController>(UserController);
    });

    it('should user get a token', async () => {
        expect(await controller.login({
            username: User.username,
            password: User.password,
        })).toHaveProperty('token');
    });
});
