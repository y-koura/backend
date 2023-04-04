import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleModule } from './google/google.module';
import { BooksController } from './books/books.controller';

@Module({
  imports: [GoogleModule],
  controllers: [AppController, BooksController],
  providers: [AppService],
})
export class AppModule {}
