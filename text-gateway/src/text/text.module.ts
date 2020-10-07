import {Module} from '@nestjs/common';
import {TextController} from './text.controller';
import {TextService} from './text.service';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {TEXT_LISTENER_SERVICE} from "./text.constants";

@Module({
    imports: [
        ClientsModule.register([{
            name: TEXT_LISTENER_SERVICE,
            transport: Transport.TCP,
            options: {
                port: 7878
            }
        }]),
    ],
    providers: [TextService],
    controllers: [TextController]
})
export class TextModule {
}