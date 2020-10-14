import {Controller, Logger} from "@nestjs/common";
import {EventPattern, MessagePattern} from "@nestjs/microservices";
import {TextStatisticEvent} from "../constant/text-statistic.event";
import {TextStatisticParam} from "../interface/TextStatisticParam";
import {TextStatisticService} from "../service/text-statistic.service";
import {TextDto} from "../dto/text.dto";

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

    @MessagePattern(TextStatisticEvent.ON_SEND_DATA_FROM_STAT)
    async getStats(): Promise<TextDto[]> {
        this.logger.log(`Incoming request text statistic from event ${TextStatisticEvent.ON_SEND_DATA_FROM_STAT} with data:`);
        return this.textStatisticService.getStats();
    }
}