import {Body, Controller, Get, Logger, Post} from "@nestjs/common";
import {TextService} from "../service/text.service";
import {TextMessageDto} from "../dto/text-message.dto";

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
}