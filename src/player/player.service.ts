/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Player } from '@prisma/client';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayerService {
  constructor(private prisma: PrismaService) {}

  async createPlayer(data: CreatePlayerDto): Promise<Player> {
    return this.prisma.player.create({
      data,
    });
  }

  // Método para buscar todos os jogadores
  async getAllPlayers(): Promise<Player[]> {
    return this.prisma.player.findMany();
  }

  // Método para buscar um jogador por ID
  async getPlayerById(id: string): Promise<Player | null> {
    return this.prisma.player.findUnique({
      where: { id },
    });
  }

  // Método para atualizar um jogador por ID
  async updatePlayer(id: string, data: UpdatePlayerDto): Promise<Player> {
    return this.prisma.player.update({
      where: { id },
      data,
    });
  }

  // Método para deletar um jogador por ID
  async deletePlayer(id: string): Promise<Player> {
    return this.prisma.player.delete({
      where: { id },
    });
  }
}
