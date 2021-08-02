import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncoderModule } from './encoder/encoder.module';

@Module({
  imports: [EncoderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
