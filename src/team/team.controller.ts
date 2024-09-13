/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from '@prisma/client';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  async createTeam(@Body() data: { name: string, city: string, founded?: Date }): Promise<Team> {
    return this.teamService.createTeam(data);
  }

  @Get()
  async getTeams(): Promise<Team[]> {
    return this.teamService.getTeams();
  }

  @Get(':id')
  async getTeam(@Param('id') id: string): Promise<Team> {
    return this.teamService.getTeamById(id);
  }

  @Put(':id')
  async updateTeam(@Param('id') id: string, @Body() data: { name?: string, city?: string, founded?: Date }): Promise<Team> {
    return this.teamService.updateTeam(id, data);
  }

  @Delete(':id')
  async deleteTeam(@Param('id') id: string): Promise<Team> {
    return this.teamService.deleteTeam(id);
  }
}
