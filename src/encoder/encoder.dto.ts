import {IsNotEmpty, IsString, IsUrl} from 'class-validator';

export class EncoderDto{

    @IsNotEmpty()
    @IsString()
    @IsUrl({
        require_host : true,
        require_protocol : true,
        require_valid_protocol  : true
    },{
        message : "Kindly enter a valid url"
    })
    readonly url: string
}
