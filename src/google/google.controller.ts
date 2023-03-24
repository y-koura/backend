import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { GoogleService } from './google.service';

@Controller('google')
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Request() req) {
    return req;
  }

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Request() req) {
    return this.googleService.googleLogin(req);
  }
}
