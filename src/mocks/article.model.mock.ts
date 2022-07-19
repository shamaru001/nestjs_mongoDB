import {
    Article
} from '../article/schemas/article.schema';

export const ArticleDataMock: Article[] = [
    {
        // _id: "62d6ed5ad67bbb55f79aaf69",
        title: "1",
        author: "allears",
        comment_text: "Google is pushing this story -- it&#x27;s appeared on other sites as well.<p>Obviously, Google would love to add more nodes to its information-gathering network.",
        objectID: "32154981",
        story_title: "Old PCs can find new life with Google ChromeOS Flex",
        created_at: Date.prototype,
        _tags: [
            "comment",
        ],
        isDeleted: false,
    },
    {
        // _id: "62d6ed5ad67bbb55f79aaf69",
        title: "2",
        author: "allears",
        comment_text: "Google is pushing this story -- it&#x27;s appeared on other sites as well.<p>Obviously, Google would love to add more nodes to its information-gathering network.",
        objectID: "32154981",
        story_title: "Old PCs can find new life with Google ChromeOS Flex",
        created_at: Date.prototype,
        _tags: [
            "comment",
        ],
        isDeleted: false,
    },
    {
        // _id: "62d6ed5ad67bbb55f79aaf69",
        title: "3",
        author: "allears",
        comment_text: "Google is pushing this story -- it&#x27;s appeared on other sites as well.<p>Obviously, Google would love to add more nodes to its information-gathering network.",
        objectID: "32154981",
        story_title: "Old PCs can find new life with Google ChromeOS Flex",
        created_at: Date.prototype,
        _tags: [
            "comment",
        ],
        isDeleted: false,
    },
];

export class ArticleModelMock {

    find() {
        return this;
    }

    skip() {
        return this;
    }

    limit() {
        return this;
    }

    async exec() {
        return ArticleDataMock;
    }

    async create(article) {
        return article;
    }

    async count() {
        return 1;
    }

    async findOneAndUpdate() {
        return ArticleDataMock[0];
    }

}