import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user@mail.ru", description: "E-mail" })
  @IsString({ message: "Должно быть строкой" })
  @IsEmail({}, { message: "Неккоретный email" })
  readonly email: string;

  @ApiProperty({ example: "password", description: "Пароль" })
  @IsString({ message: "Должно быть строкой" })
  @Length(4, 16, { message: "Не меньше 4 и не больше 16 символов" })
  readonly password: string;
}
