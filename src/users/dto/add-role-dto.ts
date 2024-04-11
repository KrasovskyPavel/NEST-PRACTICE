import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
  @IsString({ message: "Должен быть строкой" })
  @ApiProperty({ example: "ADMIN", description: "Роль" })
  readonly value: string;

  @IsNumber({}, { message: "Должен быть числом" })
  @ApiProperty({ example: "3", description: "Id пользователя" })
  readonly userId: number;
}
