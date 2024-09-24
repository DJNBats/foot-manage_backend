/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from '@prisma/client';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))  // Validação ativa
  async createTeam(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamService.createTeam(createTeamDto);
  }

  @Get()
  async getTeams(): Promise<Team[]> {
    return this.teamService.getAllTeams();
  }

  @Get(':id')
  async getTeamById(@Param('id') id: string): Promise<Team> {
    return this.teamService.getTeamById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))  // Validação ativa
  async updateTeam(
    @Param('id') id: string,
    @Body() updateTeamDto: UpdateTeamDto
  ): Promise<Team> {
    return this.teamService.updateTeam(id, updateTeamDto);
  }

  @Delete(':id')
  async deleteTeam(@Param('id') id: string): Promise<Team> {
    return this.teamService.deleteTeam(id);
  }
}
