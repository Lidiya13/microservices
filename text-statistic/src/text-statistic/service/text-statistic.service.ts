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
        const result = stats.map((item) => new TextDto({id: item.id, message: item.message, length: item.length}));
        for (let c = 0; c < result.length; c++) {
            for (let i = 0; i < result.length; i++) {
                if (result[c].message === result[i].message) {
                    result[c].count++;
                }
            }
        }
        return result;
    }

    async searchMessage() {
        await this.textModel.find({
            message: {
                $regex: /abc def/i
            }
        })
    }
}