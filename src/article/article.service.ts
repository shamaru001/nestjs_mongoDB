import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
    Article,
} from './schemas/article.schema';
import { ArticleQueryDto } from './dto/articleQuery.dto';

@Injectable()
export class ArticleService {
    constructor(
        @InjectModel(Article.name)
        private readonly articleModel: Model<Article>,
    ) {}


    public async findArticles(
        limit: number,
        offset: number,
        fields: ArticleQueryDto
    ): Promise<Article[]> {
        return this.articleModel
            .find({
                isDeleted: false,
                ...fields
            })
            .skip(offset)
            .limit(limit)
            .exec();
    }

     public async DeleteArticle(id: string): Promise<Article> {
        return this.articleModel.findOneAndUpdate({
            _id: id,
            isDeleted: false,
        }, {
            isDeleted: true,
        });
    }
}
