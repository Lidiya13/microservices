import {Controller, Get, Post} from "@nestjs/common";
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

    /*@Post()
    async createTextMessage(@Body() textMessageDto: TextMessageDto): Promise<void>{
        return this.textService.createMessage('uii');
    }*/

    /*@Post()
    async create (@Body() dogCreateDto: DogCreateDto):Promise<TextMessageDto>{
        await this.dogService.createDog(dogCreateDto);
        return new MessageDto('Данные внесены');
    }*/
}