import {Controller, Logger} from "@nestjs/common";
import {EventPattern} from "@nestjs/microservices";
import {TextStatisticEvent} from "../constant/text-statistic.event";
import {TextStatisticParam} from "../interface/TextStatisticParam";
import {TextStatisticService} from "../service/text-statistic.service";

@Controller()
export class TextStatisticController {
    private readonly logger = new Logger(TextStatisticController.name);

    constructor(private readonly textStatisticService: TextStatisticService) {
    }

    @EventPattern(TextStatisticEvent.ON_SEND_CALCULATE_RESULT)
    async handleSendCalculateResult(data: TextStatisticParam): Promise<void> {
        this.logger.log(`Incoming request text statistic from event ${TextStatisticEvent.ON_SEND_CALCULATE_RESULT} with data:`);
        await this.textStatisticService.create(data);
    }
}