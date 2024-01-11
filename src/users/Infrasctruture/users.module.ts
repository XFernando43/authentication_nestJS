import { Module } from '@nestjs/common';
import { UsersService } from '../App/Service/users.service';
import { UsersController } from '../App/Controller/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../Domain/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../Strategies/jwt.strategy';

@Module({
  imports:[
            TypeOrmModule.forFeature([User]),
            JwtModule.register({
              secret:"SuperSecret:3TuMamiRichichichima",
              signOptions:{expiresIn:'50m'},
            })
          ],
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy],
})
export class UsersModule {}
