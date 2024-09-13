/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  imports: [PrismaModule],  // Certifique-se de importar o PrismaModule
  providers: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}
