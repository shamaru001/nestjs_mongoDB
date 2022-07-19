import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import {
    User
} from './User';


describe('UsersService tests', () => {
    let service: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserService],
        }).compile();

        service = module.get<UserService>(UserService);
    });

    it('should user get a token', async () => {
        expect(await service.login({
            username: User.username,
            password: User.password,
        })).toHaveProperty('token');
    });

    it('should user fail to auth', async () => {

        try {
            await service.login({
                username: 'example',
                password: 'example',
            });
        }catch (e) {
            expect(e.message).toStrictEqual("Invalid username or password.");
        }

    });

});
