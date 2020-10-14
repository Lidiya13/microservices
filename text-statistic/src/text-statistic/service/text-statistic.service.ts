import {Model} from "mongoose";
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Text, TextDocument} from "../schemas/text-statistic.schema";
import {TextStatisticParam} from "../interface/TextStatisticParam";
import {TextDto} from "../dto/text.dto";


@Injectable()
export class TextStatisticService {

    constructor(
        @InjectModel(Text.name)
        private textModel: Model<TextDocument>
    ) {
    }

    async create(data: TextStatisticParam): Promise<Text> {
        const createData = new this.textModel(data);
        return createData.save();
    }

    async getStats(): Promise<TextDto[]> {
        const stats = await this.textModel.find().exec();
        return stats.map((item) => new TextDto({id: item.id, message: item.message, length: item.length}));
    }
}