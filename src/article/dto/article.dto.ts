import { IsString, IsArray, IsDateString } from 'class-validator';
import { Exclude } from 'class-transformer';

export class ArticleDto {
    @IsString()
    readonly title: string;

    @IsString()
    readonly author: string;

    @IsString()
    readonly comment_text: string;

    @IsString()
    objectID: string;

    @IsString()
    story_title: string;

    @IsDateString()
    created_at: Date;

    @IsArray()
    _tags: [string];

    @Exclude()
    isDeleted: boolean;

}