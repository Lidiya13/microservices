import {Module} from "@nestjs/common";
import {TextListenerController} from "./text-listener.controller";

@Module({
    controllers: [TextListenerController]
})
export class TextListenerModule {
}
