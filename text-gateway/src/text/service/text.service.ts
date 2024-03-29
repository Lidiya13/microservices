import {Inject, Injectable, Logger, OnApplicationBootstrap} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {TEXT_GATEWAY_SERVICE, TEXT_LISTENER_SERVICE} from "../constant/text.constants";
import {TextGatewayEvent} from "../constant/text-gateway.event";
import {TextMessageDto} from "../dto/text-message.dto";
import {TextDto} from "../dto/text.dto";
import {SearchMessageQueryDto} from "../dto/search-message-query.dto";
import {SearchResponseDto} from "../dto/search-response.dto";

@Injectable()
export class TextService implements OnApplicationBootstrap {
    private readonly logger = new Logger(TextService.name);

    constructor(
        @Inject(TEXT_LISTENER_SERVICE)
        private client: ClientProxy,
        @Inject(TEXT_GATEWAY_SERVICE)
        private statisticService: ClientProxy
    ) {
    }

    async onApplicationBootstrap(): Promise<void> {
        await this.client.connect();
        this.logger.log(`Success connect to ${TEXT_LISTENER_SERVICE}`);
        await this.statisticService.connect();
        this.logger.log(`Success connect to ${TEXT_GATEWAY_SERVICE}`);
    }

    getHello(): string {
        this.client.emit(TextGatewayEvent.ON_GET_TEXT, {message: 'Hello World'})
        return 'Hello World printed';
    }

    createMessage(message: TextMessageDto): void {
        this.client.emit(TextGatewayEvent.ON_POST_TEXT, message);
    }

    async getStatisticFromTextStatistic(): Promise<TextDto[]> {
        const stats = await this.statisticService.send(TextGatewayEvent.ON_SEND_DATA_FROM_STAT, {}).toPromise();
        const result = stats.map((item) => new TextDto({id: item.id, message: item.message, length: item.length}));
        return result;
    }

    async getMessageAfterSearch(messageQueryDto: SearchMessageQueryDto): Promise<SearchResponseDto[]> {
        const stats = await this.statisticService.send(TextGatewayEvent.ON_SEARCH_WORD_IN_DB, {
            substring: messageQueryDto.message
        }).toPromise();
        const result = stats.map((item) => new SearchResponseDto({id: item.id, message: item.message}));
        return result;
    }
}