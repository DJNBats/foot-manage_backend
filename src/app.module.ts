/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { TeamModule } from './team/team.module';
import { PlayerModule } from './player/player.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    TeamModule, 
    PlayerModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}


