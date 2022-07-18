import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import {
    HttpService,
} from '@nestjs/axios';
import { Model } from "mongoose";
import { Article } from '../article/schemas/article.schema';
import { InjectModel } from '@nestjs/mongoose';

const URL_DATA = "https://hn.algolia.com/api/v1/search_by_date?query=nodejs";

@Injectable()
export class TasksService  implements OnModuleInit {
    private readonly logger = new Logger(TasksService.name);
    constructor(
        private readonly httpService: HttpService,
        @InjectModel(Article.name)
        private readonly articleModel: Model<Article>
    ) {}

    onModuleInit() {
        this.injectArticles().then();
    }

    private async findAll(): Promise<any> {
        return this.httpService.get(URL_DATA).toPromise();
    }


    @Cron(CronExpression.EVERY_HOUR)
    async injectArticles() {
        this.logger.debug('RUNNING CRONJOB');
        const response = await this.findAll();
        if (response?.data) {
            const data = response?.data;
            const articles = <Article[]>data?.hits;

            for (const article of articles) {
                const exist = await this.articleModel.count({
                    objectID: article.objectID,
                });

                if (!exist) {
                    await this.articleModel.create(article);
                }
            }
            this.logger.debug('DATA INJECTED');
        }

    }

}
