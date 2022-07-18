import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import {
  HttpModule
} from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from '../article/schemas/article.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: Article.name, schema: ArticleSchema },
    ]),
  ],
  providers: [TasksService]
})

export class TasksModule {}
