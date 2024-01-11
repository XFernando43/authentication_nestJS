import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from '../Service/users.service';
import { CreateUserDto } from '../../Domain/dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { SignInUserDto } from 'src/users/Domain/dto/SignIn-user.dto';

@ApiTags("Users")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() _user:CreateUserDto){
    return this.usersService.createUser(_user);
  }
  
  @Get()
  getUser(){
    return this.usersService.findAll();
  }

  @Post("SIGNIN")
  SignIn(@Body() _user: SignInUserDto){
    return this.usersService.signIn(_user);
  }
  
}
