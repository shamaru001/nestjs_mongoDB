import { IsString, IsArray, IsDateString, Max, Min, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export enum months {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December",
}

export class ArticleQueryDto {
    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly title?: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    readonly author?: string;

    @ApiPropertyOptional({
        isArray: true,
        enum: months,
    })
    @IsDateString()
    @IsOptional()
    month?: months;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    _tags?: string;

    @ApiPropertyOptional()
    @Max(5)
    @Min(1)
    @IsOptional()
    limit?: number;

}