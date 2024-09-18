/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TeamModule } from './team/team.module';
import { PlayerModule } from './player/player.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    TeamModule, 
    PlayerModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}


