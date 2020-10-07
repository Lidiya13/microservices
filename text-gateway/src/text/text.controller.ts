import {Controller, Get} from "@nestjs/common";
import {TextService} from "./text.service";

@Controller()
export class TextController {
    constructor(
        private readonly textService: TextService) {
    }

    @Get()
    getHello(): string {
        // this.client.emit<string>('message_printed', new Message('Hello World'));
        return this.textService.getHello();
    }
}