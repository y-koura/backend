import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Book, PrismaClient } from '@prisma/client';
import { BookCreateDTO } from './dto/create-book.dto';

const prisma = new PrismaClient();

@Controller('books')
export class BooksController {
  @Get('/')
  async getBooks() {
    const books = await prisma.book.findMany();
    return books;
  }
  @Get('/search')
  async searchBooks(@Query('title') title: string): Promise<Book[]> {
    const books = await prisma.book.findMany({
      where: {
        title: {
          contains: title,
        },
      },
    });

    return books;
  }

  @Post('/register')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createBook(@Body() bookCreateDTO: BookCreateDTO) {
    const { title, author, publishedDate } = bookCreateDTO;
    const book = await prisma.book.create({
      data: { title, author, publishedDate },
    });
    return { book };
  }
}
