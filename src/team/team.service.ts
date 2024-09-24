/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Team } from '@prisma/client';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

 // Método para criar um novo time
 async createTeam(data: CreateTeamDto): Promise<Team> {
  return this.prisma.team.create({
    data,
  });
}

// Método para buscar todos os times
async getAllTeams(): Promise<Team[]> {
  return this.prisma.team.findMany({
    include: { players: true }, // Inclui os jogadores no resultado
  });
}

// Método para buscar um time por ID
async getTeamById(id: string): Promise<Team | null> {
  return this.prisma.team.findUnique({
    where: { id },
  });
}

// Método para atualizar um time por ID
async updateTeam(id: string, data: UpdateTeamDto): Promise<Team> {
  return this.prisma.team.update({
    where: { id },
    data,
  });
}

// Método para deletar um time por ID
async deleteTeam(id: string): Promise<Team> {
  return this.prisma.team.delete({
    where: { id },
  });
}
}