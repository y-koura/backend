import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleModule } from './google/google.module';
import { BooksController } from './books/books.controller';
import { CorsMiddleware } from './cors.middleware';

@Module({
  imports: [GoogleModule],
  controllers: [AppController, BooksController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
