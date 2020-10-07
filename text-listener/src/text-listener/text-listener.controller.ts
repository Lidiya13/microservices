import {Controller, Logger} from "@nestjs/common";
import {EventPattern} from "@nestjs/microservices";
import {TextListenerEvent} from "./constant/text-listener.event";
import {TextListenerParam} from "./interface/TextListenerParam";

@Controller()
export class TextListenerController {
    private readonly logger = new Logger(TextListenerController.name);

    @EventPattern(TextListenerEvent.ON_GET_TEXT)
    getText(data: TextListenerParam): void {
        this.logger.log(`Incoming request text listener from event ${TextListenerEvent.ON_GET_TEXT} with data:`);
        this.logger.debug(data);
    }
}