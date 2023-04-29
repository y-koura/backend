import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Review, PrismaClient } from '@prisma/client';
import { ReviewCreateDTO } from './dto/create-review.dto';

const prisma = new PrismaClient();

@Controller('reviews')
export class ReviewsController {
  @Get('/')
  async getReviews(@Query('bookId') bookId: string): Promise<Review[]> {
    const reviews = await prisma.review.findMany({
      where: {
        bookId: {
          equals: parseInt(bookId),
        },
      },
    });

    return reviews;
  }

  @Post('/register')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createReview(@Body() reviewCreateDTO: ReviewCreateDTO) {
    const { comment, rating, reviewDate, userId, bookId } = reviewCreateDTO;
    // userIdとかbookIdとかrelation設定してるから別の方法ありそう
    const review = await prisma.review.create({
      data: { comment, rating, reviewDate, userId, bookId },
    });
    return review;
  }
}
