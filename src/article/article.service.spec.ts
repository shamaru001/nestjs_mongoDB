import { Test, TestingModule } from '@nestjs/testing';
import { ArticleService } from './article.service';
import {
    getModelToken
} from '@nestjs/mongoose';
import {
    Article
} from './schemas/article.schema';

describe('ArticleService tests', () => {
    let service: ArticleService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ArticleService,
                {
                    provide: getModelToken(Article.name),
                    useValue: { }  // <-- Use the Model Class from Mongoose
                },
            ],
        }).compile();

        service = module.get<ArticleService>(ArticleService);
    });

    it('should find articles', () => {
        expect(service.findArticles(2, {})).toBeDefined();
    });
});
