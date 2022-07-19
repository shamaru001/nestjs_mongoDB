import { Test, TestingModule } from '@nestjs/testing';
import { ArticleController } from './article.controller';
import { getModelToken } from '@nestjs/mongoose';
import { Article } from './schemas/article.schema';
import { ArticleModelMock } from '../mocks/article.model.mock';
import {
  ArticleService
} from './article.service';
import {
  ArticleDataMock
} from '../mocks/article.model.mock';

describe('ArticleController', () => {
  let controller: ArticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [
        ArticleService,
        {
          provide: getModelToken(Article.name),
          useClass: ArticleModelMock
        },
      ]
    }).compile();

    controller = module.get<ArticleController>(ArticleController);
  });

  it('should be defined', async () => {
    const response = await controller.findArticles({});
    expect(response.length).toBeGreaterThanOrEqual(ArticleDataMock.length);
  });
});
