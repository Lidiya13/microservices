import {Inject, Injectable, Logger, OnApplicationBootstrap} from "@nestjs/common";
import {ClientProxy} from "@nestjs/microservices";
import {TEXT_STATISTIC_SERVICE} from "../constant/text.constants";
import {TextCalcEvent} from "../constant/text-calc.event";
import {TextCalcParam} from "../interface/TextCalcParam";

@Injectable()
export class TextCalcService implements OnApplicationBootstrap {
    private readonly logger = new Logger(TextCalcService.name)

    constructor(
        @Inject(TEXT_STATISTIC_SERVICE)
        private client: ClientProxy
    ) {
    }

    async onApplicationBootstrap(): Promise<void> {
        await this.client.connect();
        this.logger.log(`Success connect to ${TEXT_STATISTIC_SERVICE}`)
    }

    calculateMessageLength(data: TextCalcParam) {
        const length = data.message.length;
        console.log(length);
        this.client.emit(TextCalcEvent.ON_SEND_CALCULATE_RESULT, {message: data.message, length});
    }
}