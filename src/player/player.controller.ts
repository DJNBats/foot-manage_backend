/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PlayerService } from './player.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Player, Position, Prisma } from '@prisma/client';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  async createPlayer(@Body() data: Prisma.PlayerCreateInput): Promise<Player>{
    return this.playerService.createPlayer(data);
  }

  @Get()
  async getPlayers(): Promise<Player[]> {
    return this.playerService.getAllPlayers();
  }

  @Get(':id')
  async getPlayersByTeam(@Param('id') id: string): Promise<Player | null> {
    return this.playerService.getPlayerById(id);
  }

  @Put(':id')
  async updatePlayer(@Param('id') id: string, @Body() data: { firstName?: string, lastName?: string, position?: Position }): Promise<Player> {
    return this.playerService.updatePlayer(id, data);
  }

  @Delete(':id')
  async deletePlayer(@Param('id') id: string): Promise<Player> {
    return this.playerService.deletePlayer(id);
  }
}
