import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginSchemaDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  login(@Body() body: LoginSchemaDto) {
    const { username, password } = body;
    return this.usersService.login(username, password);
  }
}
