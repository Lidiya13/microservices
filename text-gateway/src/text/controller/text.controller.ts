import {Body, Controller, Get, Post} from "@nestjs/common";
import {TextService} from "../service/text.service";
import {TextMessageDto} from "../dto/text-message.dto";
import {TextDto} from "../../../dto/text.dto";

@Controller()
export class TextController {

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

    @Get('stats')
    getStatistic(): Promise<TextDto[]> {
        return this.textService.getStatisticFromTextStatistic();
    }
}