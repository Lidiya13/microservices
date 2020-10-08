import {Module} from "@nestjs/common";
import {TextListenerController} from "./controller/text-listener.controller";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {TextListenerService} from "./service/text-listener.service";
import {TEXT_CALC_SERVICE} from "./constant/text.constants";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: TEXT_CALC_SERVICE,
                transport: Transport.REDIS,
                options: {
                    url: 'redis://localhost:7878'
                }
            }]),
    ],
    controllers: [TextListenerController],
    providers: [TextListenerService]
})
export class TextListenerModule {
}