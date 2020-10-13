import {Module} from '@nestjs/common';
import {TextStatisticModule} from "./text-statistic/text-statistic.module";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        TextStatisticModule,
        MongooseModule.forRoot('mongodb://localhost:27017/test')
    ]
})
export class AppModule {
}
