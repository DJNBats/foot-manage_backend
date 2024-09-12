/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Player, Position } from '@prisma/client';

@Injectable()
export class PlayerService {
  constructor(private prisma: PrismaService) {}

  async addPlayer(data: { firstName: string, lastName: string, position: Position, teamId: string }): Promise<Player> {
    return this.prisma.player.create({
      data,
    });
  }

  async getPlayers(): Promise<Player[]> {
    return this.prisma.player.findMany();
  }

  async getPlayersByTeam(teamId: string): Promise<Player[]> {
    return this.prisma.player.findMany({
      where: { teamId },
    });
  }

  async updatePlayer(id: string, data: { firstName?: string, lastName?: string, position?: Position }): Promise<Player> {
    return this.prisma.player.update({
      where: { id },
      data,
    });
  }

  async deletePlayer(id: string): Promise<Player> {
    return this.prisma.player.delete({
      where: { id },
    });
  }
}
