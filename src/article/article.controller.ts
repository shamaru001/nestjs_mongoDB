import {
    Controller,
    Delete,
    Get,
    Query,
    UseInterceptors,
    ValidationPipe,
    Param,
    NotFoundException,
    UseGuards,
} from '@nestjs/common';
import {
  ArticleService
} from './article.service';
import { Article } from './schemas/article.schema';
import {
  ArticleDto
} from './dto/article.dto';
import {
  ArticleQueryDto
} from './dto/articleQuery.dto';
import {
    ApiOperation,
    ApiResponse,
    ApiTags,
    ApiBearerAuth, ApiOkResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

const ARTICLE = 'article';
@ApiBearerAuth()
@ApiTags(ARTICLE)
@Controller(ARTICLE)
export class ArticleController {
      constructor(private readonly articleService: ArticleService) {}

      @ApiOperation({description:"Get Articles."})
      @ApiResponse({ status: 200, description: 'The list of articles has been successfully retrieved.' })
      @ApiOkResponse({ type: Article, isArray: true })
      @UseGuards(AuthGuard('jwt'))
      @Get()
      @UseInterceptors(ArticleDto)
      async findArticles(
          @Query(new ValidationPipe({
              transform: true,
              transformOptions: {enableImplicitConversion: true},
              forbidNonWhitelisted: true,
          })) articleQueryDto: ArticleQueryDto
      ): Promise<Article[]> {
            return this.articleService.findArticles(articleQueryDto.limit, articleQueryDto.offset, articleQueryDto);
      }

    @ApiResponse({ status: 200, description: 'Deleted Article.' })
    @ApiResponse({ status: 404, description: 'Article not found.' })
    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
      async deleteArticle(@Param('id') id: string): Promise<Article> {
          try {
              const article = await this.articleService.DeleteArticle(id);
              if (article) {
                  return article
              }
              throw new Error("Article not found!");
          }catch (e) {
              throw new NotFoundException("Article not found!");
          }
      }
}
