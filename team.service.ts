/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Team } from '@prisma/client';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  async createTeam(data: { name: string, city: string, founded?: Date }): Promise<Team> {
    return this.prisma.team.create({
      data,
    });
  }

  async getTeams(): Promise<Team[]> {
    return this.prisma.team.findMany();
  }

  async getTeamById(id: string): Promise<Team> {
    return this.prisma.team.findUnique({
      where: { id },
      include: { players: true },
    });
  }

  async updateTeam(id: string, data: { name?: string, city?: string, founded?: Date }): Promise<Team> {
    return this.prisma.team.update({
      where: { id },
      data,
    });
  }

  async deleteTeam(id: string): Promise<Team> {
    return this.prisma.team.delete({
      where: { id },
    });
  }
}
