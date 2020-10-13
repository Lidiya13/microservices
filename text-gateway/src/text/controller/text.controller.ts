import {Body, Controller, Get, Logger, Post} from "@nestjs/common";
import {TextService} from "../service/text.service";
import {TextMessageDto} from "../dto/text-message.dto";

@Controller()
export class TextController {
    /*private readonly logger = new Logger(TextController.name);*/

    constructor(
        private readonly textService: TextService) {
    }

    @Get()
    getHello(): string {
        return this.textService.getHello();
    }

    @Post()
    async createTextMessage(@Body() textMessageDto: TextMessageDto): Promise<{ message: string }> {
        await this.textService.createMessage(textMessageDto);
        return {message: 'Message printed'}
    }

/*    @MessagePattern(TextGatewayEvent.ON_SEND_DATA_FROM_DB)
    sendDataFromStatistic(data: TextGatewayParam): void {
        this.logger.log(`Incoming request text listener from event ${TextGatewayEvent.ON_SEND_DATA_FROM_DB} with data:`);
        this.logger.debug(data);
    }*/
}