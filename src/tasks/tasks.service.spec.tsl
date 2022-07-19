import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import {
  ArticleSchema,
  Article
} from '../article/schemas/article.schema';
import { getModelToken } from '@nestjs/mongoose';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService,
        {
          provide: getModelToken(Article.name),
          useValue: ArticleSchema  // <-- Use the Model Class from Mongoose
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('should return true and to inject data in mongoDB from hacker news.', async () => {
    expect(await service.injectArticles()).toBe(true);
  });
});
