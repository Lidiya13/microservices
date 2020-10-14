import {Module} from "@nestjs/common";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {TEXT_CALC_SERVICE} from "./constant/text.constants";
import {TextListenerController} from "./controller/text-listener.controller";
import {TextListenerService} from "./service/text-listener.service";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: TEXT_CALC_SERVICE,
                transport: Transport.REDIS,
                options: {
                    url: 'redis://localhost:5002'
                }
            },

        ]),
    ],
    controllers: [TextListenerController],
    providers: [TextListenerService]
})
export class TextListenerModule {
}