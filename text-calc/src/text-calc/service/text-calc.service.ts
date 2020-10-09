import {Inject, Injectable, Logger, OnApplicationBootstrap} from "@nestjs/common";
import {ClientProxy} from "@nestjs/microservices";
import {TEXT_STATISTIC_SERVICE} from "../constant/text.constants";

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
}