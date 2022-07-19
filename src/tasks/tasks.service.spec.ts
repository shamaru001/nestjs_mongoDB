import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import {
    Article
} from '../article/schemas/article.schema';
import { getModelToken } from '@nestjs/mongoose';
import {
    HttpService,
} from '@nestjs/axios';
import {
    ArticleModelMock,
} from '../mocks/article.model.mock';
import {
    HttpServiceMock,
} from '../mocks/http.service.mock';

describe('TasksService tests', () => {
    let service: TasksService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TasksService,
                {
                    provide: getModelToken(Article.name),
                    useClass: ArticleModelMock
                },
                {
                    provide: HttpService,
                    useClass: HttpServiceMock,
                },
            ],
        }).compile();

        service = module.get<TasksService>(TasksService);
    });

    it('should return true and to inject data from hacker news in mongoDB .', async () => {
        expect(await service.injectArticles()).toBe(true);
    });
});
