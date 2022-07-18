import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
    ArticleController
} from './article.controller';
import {
    ArticleSchema,
    Article,
} from './schemas/article.schema';
import { ArticleService } from './article.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Article.name, schema: ArticleSchema },
        ]),
    ],
    controllers: [
        ArticleController
    ],
    providers: [ArticleService]
})
export class ArticleModule {}
