// src/player/dto/create-player.dto.ts
import { IsString, IsEnum, IsUUID, IsNotEmpty } from 'class-validator';

enum Position {
  GOALKEEPER = 'GOALKEEPER',
  DEFENDER = 'DEFENDER',
  MIDFIELDER = 'MIDFIELDER',
  FORWARD = 'FORWARD',
}

export class CreatePlayerDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEnum(Position)
  position: Position;

  @IsUUID()
  @IsNotEmpty()
  teamId: string;
}
