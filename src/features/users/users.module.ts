import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseService } from 'src/core/db/database.service';

@Module({
  controllers: [UsersController],
  providers: [DatabaseService, UsersService],
})
export class UsersModule {}
