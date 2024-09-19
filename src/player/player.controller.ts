/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PlayerService } from './player.service';
import { Player, Position } from '@prisma/client';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  async addPlayer(@Body() data: {
    Prisma: any; firstName: string, lastName: string, position: Position
}): Promise<Player> {
    return this.playerService.createPlayer(data.firstName, data.lastName, data.position, data.Prisma.PlayerCreateInput);
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
