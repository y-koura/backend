import { Controller, Get, Query } from '@nestjs/common';
import { Book, PrismaClient } from '@prisma/client';

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
}
