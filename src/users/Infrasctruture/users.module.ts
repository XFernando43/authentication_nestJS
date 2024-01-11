import { Module } from '@nestjs/common';
import { UsersService } from '../App/Service/users.service';
import { UsersController } from '../App/Controller/users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
