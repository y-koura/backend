import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleModule } from './google/google.module';

@Module({
  imports: [GoogleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
