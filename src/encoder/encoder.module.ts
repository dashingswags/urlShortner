import { Module } from '@nestjs/common';
import { EncoderController } from './encoder.controller';
import { EncoderService } from './encoder.service';
import {EncoderRepository} from "./encoder.repository";

@Module({
  controllers: [EncoderController],
  providers: [EncoderService, EncoderRepository]
})
export class EncoderModule {}
