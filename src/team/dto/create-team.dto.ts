/* eslint-disable prettier/prettier */
// src/team/dto/create-team.dto.ts
import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsDateString()
  founded: string;  // Valida a data de fundação
}
