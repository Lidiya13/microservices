import {Inject, Injectable, Logger, OnApplicationBootstrap} from "@nestjs/common";
import {ClientProxy} from "@nestjs/microservices";
import {TEXT_CALC_SERVICE} from "../constant/text.constants";
import {TextListenerParam} from "../interface/TextListenerParam";
import {TextListenerEvent} from "../constant/text-listener.event";

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

    sendMessageToCalc(message: TextListenerParam): void {
        this.client.emit(TextListenerEvent.ON_SEND_MESSAGE, message);
        this.logger.log(`Message published`)
    }
}