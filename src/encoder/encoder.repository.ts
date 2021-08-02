import {Injectable} from '@nestjs/common';

@Injectable()
export class EncoderRepository {

    private dataStore = [];

     getUrlByUniqueId(unique_id: string) : string{
        return this.dataStore[unique_id];
     }

     saveUrlWithKey(url : string, unique_id : string) : boolean {
        this.dataStore[unique_id] = url;
        return true;
     }

}
