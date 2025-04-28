import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CommonModuleModule } from 'src/core/common-module/common-module.module';

@Module({
  imports: [CommonModuleModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
