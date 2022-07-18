import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Article {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  comment_text: string;

  @Prop()
  objectID: string;

  @Prop()
  story_title: string;

  @Prop()
  created_at: Date;

  @Prop()
  _tags: [string];

  @Prop({
    required: true,
    default: false,
  })
  isDeleted: boolean;

}

export type ArticleDocument = Article & Document;

export const ArticleSchema = SchemaFactory.createForClass(Article);