import { ApiProperty } from "@nestjs/swagger";

export class SignInUserDto {
    @ApiProperty()
    userEmail:string;
    @ApiProperty()
    userPassword:string;
}