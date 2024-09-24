/* eslint-disable prettier/prettier */
// src/team/dto/update-team.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamDto } from './create-team.dto'; 

export class UpdateTeamDto extends PartialType(CreateTeamDto) {}
