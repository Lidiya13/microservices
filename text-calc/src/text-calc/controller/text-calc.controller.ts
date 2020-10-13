import {Controller, Logger} from "@nestjs/common";
import {EventPattern} from "@nestjs/microservices";
import {TextCalcEvent} from "../constant/text-calc.event";
import {TextCalcParam} from "../interface/TextCalcParam";
import {TextCalcService} from "../service/text-calc.service";

@Controller()
export class TextCalcController {
    private readonly logger = new Logger(TextCalcController.name);

    constructor(private readonly testCalcService: TextCalcService) {
    }

    @EventPattern(TextCalcEvent.ON_SEND_MESSAGE)
    sendMessage(data: TextCalcParam): void {
        this.logger.log(`Incoming request text calculate from event ${TextCalcEvent.ON_SEND_MESSAGE} with data:`);
        this.testCalcService.calculateMessageLength(data);
    }
}