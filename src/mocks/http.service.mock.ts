import {
    ArticleDataMock
} from './article.model.mock';

export class HttpServiceMock {

    get() {
        return this;
    }

    toPromise() {
        return {
            data: {
                hits: ArticleDataMock
            }
        };
    }
}