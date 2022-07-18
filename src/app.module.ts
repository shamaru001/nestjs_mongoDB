import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './article/article.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './tasks/tasks.module';
import { UserModule } from './user/user.module';

const MONGODB_URL: string = process.env.MONGODB_URL;

@Module({
  imports: [
      MongooseModule.forRoot(MONGODB_URL),
      ArticleModule,
      ScheduleModule.forRoot(),
      TasksModule,
      UserModule,
  ],
  // providers: [],
})
export class AppModule {}
