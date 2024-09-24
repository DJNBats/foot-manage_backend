/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player} from '@prisma/client';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))  // Adiciona a validação
  async createPlayer(@Body() createPlayerDto: CreatePlayerDto): Promise<Player> {
    return this.playerService.createPlayer(createPlayerDto);
  }

  @Get()
  async getPlayers(): Promise<Player[]> {
    return this.playerService.getAllPlayers();
  }

  @Get(':id')
  async getPlayerById(@Param('id') id: string): Promise<Player> {
    return this.playerService.getPlayerById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async updatePlayer(
    @Param('id') id: string,
    @Body() updatePlayerDto: UpdatePlayerDto
  ): Promise<Player> {
    return this.playerService.updatePlayer(id, updatePlayerDto);
  }

  @Delete(':id')
  async deletePlayer(@Param('id') id: string): Promise<Player> {
    return this.playerService.deletePlayer(id);
  }
}
