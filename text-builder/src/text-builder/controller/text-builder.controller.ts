import {Controller, Get} from "@nestjs/common";
import {TextBuilderService} from "../service/text-builder.service";

@Controller('url')
export class TextBuilderController {
    constructor(private readonly textBuilderService: TextBuilderService) {
    }

    @Get()
    getData() {
        return this.textBuilderService.getUrl();
    }
}