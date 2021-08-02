import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {EncoderDto} from "./encoder.dto";
import * as shortId from "shortid";
import {EncoderRepository} from "./encoder.repository";
import {config} from "../config/config";


@Injectable()
export class EncoderService {

    constructor(private encoderRepository : EncoderRepository) {}

     encodeUrl(data : EncoderDto): EncoderDto | BadRequestException {

        const uniqueId : string = shortId.generate();
        const saveUrl : boolean = this.encoderRepository.saveUrlWithKey(data.url, uniqueId);
        if(!saveUrl){
            throw new BadRequestException(`unable to encode url`)
        }
        const encodedUrl : string = `${config.appUrl}/${uniqueId}`;
        return  {url: encodedUrl};

    }

     decodeUrl(data : EncoderDto): EncoderDto | NotFoundException {

        const uniqueId : string = data.url.split('/').pop();
        const decodedUrl =  this.encoderRepository.getUrlByUniqueId(uniqueId);
        if(!decodedUrl){
            throw new NotFoundException();
        }
        return  {url: decodedUrl};

    }

}
