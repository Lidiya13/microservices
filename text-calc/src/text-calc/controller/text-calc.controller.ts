import {Controller, Logger} from "@nestjs/common";
import {EventPattern} from "@nestjs/microservices";
import {TextCalcEvent} from "../constant/text-calc.event";
import {TextCalcParam} from "../interface/TextCalcParam";

@Controller()
export class TextCalcController {
    private readonly logger = new Logger(TextCalcController.name);

    @EventPattern(TextCalcEvent.ON_SEND_MESSAGE)
    sendMessage(data: TextCalcParam): void {
        this.logger.log(`Incoming request text listener from event ${TextCalcEvent.ON_SEND_MESSAGE} with data:`);
        this.logger.debug(data.message.length);
    }
}