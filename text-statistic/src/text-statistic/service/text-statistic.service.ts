import {Model} from "mongoose";
import {Inject, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Text, TextDocument} from "../schemas/text-statistic.schema";
import {TextStatisticParam} from "../interface/TextStatisticParam";

@Injectable()
export class TextStatisticService  {

    constructor(
        @InjectModel(Text.name)
        private textModel: Model<TextDocument>,
    ) {
    }

    async create(data: TextStatisticParam): Promise<Text> {
        const createData = new this.textModel(data);
        return createData.save();
    }
}