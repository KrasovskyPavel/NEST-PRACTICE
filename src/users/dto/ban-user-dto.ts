import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {
  @ApiProperty({ example: "Ругательства", description: "Причина бана" })
  readonly banReason: string;

  @ApiProperty({ example: "3", description: "Id пользователя" })
  readonly userId: number;
}
