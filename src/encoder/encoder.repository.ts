import {EntityRepository, Repository} from "typeorm";
import {Encoder} from "./encoder.entity";

@EntityRepository(Encoder)
export class EncoderRepository extends Repository<Encoder> {

    async getUrlByUniqueId(unique_id: string) : Promise<Encoder>{
        return await this.findOne({ where : {unique_id : unique_id}});
    }

    async saveUrlWithKey(url : string, unique_id : string) : Promise<Encoder> {
        return await this.save({url, unique_id});
    }

}

