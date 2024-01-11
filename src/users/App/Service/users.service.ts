import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../Domain/dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/Domain/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { SignInUserDto } from 'src/users/Domain/dto/SignIn-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private readonly userService:Repository<User>,
                                      private readonly jwtService:JwtService){}

  async hashPassword(password:string):Promise<string>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
  }
  
  async checkPassword(password:string, passwordDb:string):Promise<boolean>{
    return await bcrypt.compare(password,passwordDb);
  }

  async findAll(){
    return await this.userService.find();
  }

  async createUser(_user: CreateUserDto){
    try {
            const hashedPassword = await this.hashPassword(_user.userPassword);
            
            const newAccount: CreateUserDto = {
                userName:_user.userName,
                userLastName:_user.userLastName,
                userEmail: _user.userEmail,
                userPassword:hashedPassword
            };
            
            const savedUser = await this.userService.save(newAccount);
            return savedUser; 

        } catch (error) {
            console.log(error);
            throw error; 
        }
    
  }

  async signIn(_user: SignInUserDto){
    const user = await this.userService.findOne({
      where:{
        userEmail:_user.userEmail
      }
    })
    const checkPassword = this.checkPassword(_user.userPassword,user.userPassword);
    if(user && checkPassword){
      const payload = {
        id:user.userId,
        user:user.userName,
      }
      const token = this.jwtService.sign(payload);
      const data = {
        user:user,
        token:token
      }
      return data;
    }else{
      throw new HttpException("NOT USER FOUND", HttpStatus.NOT_FOUND);
    }

  }

} 