import { Module } from '@nestjs/common';
import { EncoderController } from './encoder.controller';
import { EncoderService } from './encoder.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {EncoderRepository} from "./encoder.repository";

@Module({
  controllers: [EncoderController],
  providers: [EncoderService],
  imports : [TypeOrmModule.forFeature([EncoderRepository])]
})
export class EncoderModule {}
