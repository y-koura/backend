import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class BookCreateDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsDateString()
  publishedDate: Date;
}
