import { Controller, Get } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Controller('books')
export class BooksController {
  @Get('/books')
  async getBooks() {
    const books = await prisma.book.findMany();
    return books;
  }
}
