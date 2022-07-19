import { Test, TestingModule } from '@nestjs/testing';
import { ArticleService } from './article.service';
import {
    getModelToken
} from '@nestjs/mongoose';
import {
    Article
} from './schemas/article.schema';
import {
    ArticleModelMock,
    ArticleDataMock,
} from '../mocks/article.model.mock';

describe('ArticleService tests', () => {
    let service: ArticleService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ArticleService,
                {
                    provide: getModelToken(Article.name),
                    useClass: ArticleModelMock
                },
            ],
        }).compile();

        service = module.get<ArticleService>(ArticleService);
    });

    it('should find articles', async () => {
        const data = await service.findArticles(4, 1,{});
        expect(data.length).toEqual(ArticleDataMock.length);
    });


    it('should find and delete a article', async () => {
        const data = await service.DeleteArticle('test');
        expect(data).toHaveProperty('comment_text');
    });

});
