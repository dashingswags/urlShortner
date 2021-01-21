import {Body, Controller, Post} from '@nestjs/common';
import {EncoderService} from "./encoder.service";
import {EncoderDto} from "./encoder.dto";

@Controller()
export class EncoderController {

    constructor(private readonly encoderService: EncoderService) {}

    @Post('encode')
    async encodeUrl(@Body() data : EncoderDto): Promise<EncoderDto | any> {
        return await this.encoderService.encodeUrl(data);
    }

    @Post('decode')
    async decodeUrl(@Body() data : EncoderDto): Promise<any> {
        return await this.encoderService.decodeUrl(data);
    }
}
