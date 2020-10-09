import {Module} from "@nestjs/common";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {TEXT_STATISTIC_SERVICE} from "./constant/text.constants";
import {TextCalcController} from "./controller/text-calc.controller";
import {TextCalcService} from "./service/text-calc.service";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: TEXT_STATISTIC_SERVICE,
                transport: Transport.REDIS,
                options: {
                    url: 'redis://localhost:5002'
                }
            }])
    ],
    controllers: [TextCalcController],
    providers: [TextCalcService]
})
export class TextCalcModule {
}