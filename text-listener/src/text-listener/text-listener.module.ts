import {Module} from "@nestjs/common";
import {TextListenerController} from "./controller/text-listener.controller";

@Module({
    controllers: [TextListenerController]
})
export class TextListenerModule {
}