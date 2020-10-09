import {Inject, Injectable, Logger, OnApplicationBootstrap} from "@nestjs/common";
import {ClientProxy} from "@nestjs/microservices";
import {TEXT_CALC_SERVICE} from "../constant/text.constants";

@Injectable()
export class TextListenerService implements OnApplicationBootstrap {
    private readonly logger = new Logger(TextListenerService.name)

    constructor(
        @Inject(TEXT_CALC_SERVICE)
        private client: ClientProxy
    ) {
    }

    async onApplicationBootstrap(): Promise<void> {
        await this.client.connect();
        this.logger.log(`Success connect to ${TEXT_CALC_SERVICE}`)
    }
}