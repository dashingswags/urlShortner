import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncoderModule } from './encoder/encoder.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
      TypeOrmModule.forRoot(),
      EncoderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
