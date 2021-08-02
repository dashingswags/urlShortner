import {BadRequestException, Body, Controller, NotFoundException, Post} from '@nestjs/common';
import {EncoderService} from "./encoder.service";
import {EncoderDto} from "./encoder.dto";

@Controller()
export class EncoderController {

    constructor(private readonly encoderService: EncoderService) {}

    @Post('encode')
     encodeUrl(@Body() data : EncoderDto): EncoderDto | BadRequestException {
        return  this.encoderService.encodeUrl(data);
    }

    @Post('decode')
    decodeUrl(@Body() data : EncoderDto): EncoderDto | NotFoundException {
        return this.encoderService.decodeUrl(data);
    }
}
