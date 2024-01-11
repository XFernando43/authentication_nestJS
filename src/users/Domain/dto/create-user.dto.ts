import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    userName:string;
    @ApiProperty()
    userLastName:string;
    @ApiProperty()
    userEmail:string;
    @ApiProperty()
    userPassword:string;
}
