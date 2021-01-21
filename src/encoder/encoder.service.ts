import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {EncoderDto} from "./encoder.dto";
import {EncoderRepository} from "./encoder.repository";
import * as shortId from "shortid";

@Injectable()
export class EncoderService {

    constructor( private readonly encoderRepository : EncoderRepository) {}

    async encodeUrl(data : EncoderDto): Promise<EncoderDto | BadRequestException> {

        try{
            const uniqueId = shortId.generate();
            const saveUrlWithKey = await this.encoderRepository.saveUrlWithKey(data.url, uniqueId);
            return  {url: `${process.env.APP_URL}/${saveUrlWithKey.unique_id}`};
        }catch (error){
            throw new BadRequestException(`unable to encode url ${error.toString()}`)
        }
    }

    async decodeUrl(data : EncoderDto): Promise<EncoderDto | NotFoundException> {
            const uniqueId = data.url.split('/').pop();
            const savedUrl = await this.encoderRepository.getUrlByUniqueId(uniqueId);
            if(!savedUrl){
                throw new NotFoundException();
            }
            return  {url: `${process.env.APP_URL}/${savedUrl.url}`};

    }

}
