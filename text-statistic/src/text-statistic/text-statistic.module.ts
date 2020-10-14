import {Module} from "@nestjs/common";
import {TextStatisticService} from "./service/text-statistic.service";
import {TextStatisticController} from "./controller/text-statistic.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Text, TextStatisticSchema} from "./schemas/text-statistic.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Text.name,
                schema: TextStatisticSchema
            }]
        ),
    ],
    controllers: [TextStatisticController],
    providers: [TextStatisticService]
})
export class TextStatisticModule {
}