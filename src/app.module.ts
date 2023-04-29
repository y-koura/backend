import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleModule } from './google/google.module';
import { BooksController } from './books/books.controller';
import { CorsMiddleware } from './cors.middleware';
import { ReviewsController } from './reviews/reviews.controller';

@Module({
  imports: [GoogleModule],
  controllers: [AppController, BooksController, ReviewsController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorsMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
