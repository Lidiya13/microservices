import {Module} from '@nestjs/common';
import {TextController} from './controller/text.controller';
import {TextService} from './service/text.service';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {TEXT_GATEWAY_SERVICE, TEXT_LISTENER_SERVICE} from "./constant/text.constants";


@Module({
    imports: [
        ClientsModule.register([
            {
                name: TEXT_LISTENER_SERVICE,
                transport: Transport.TCP,
                options: {
                    port: 7878
                }
            },
            {
                name: TEXT_GATEWAY_SERVICE,
                transport: Transport.REDIS,
                options: {
                    url: 'redis://localhost:5002'
                }
            }
        ]),
    ],
    providers: [TextService],
    controllers: [TextController]
})
export class TextModule {
}