import { IsNotEmpty, IsString, IsNumber, IsDateString } from 'class-validator';

export class ReviewCreateDTO {
  @IsNotEmpty()
  @IsString()
  comment: string;

  @IsNotEmpty()
  @IsNumber()
  rating: number;

  @IsNotEmpty()
  @IsDateString()
  reviewDate: Date;

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  bookId: number;
}
