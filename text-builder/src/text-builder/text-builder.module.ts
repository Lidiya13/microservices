import {Module} from "@nestjs/common";
import {TextBuilderController} from "./controller/text-builder.controller";
import {TextBuilderService} from "./service/text-builder.service";
import {TextBuilder} from "./builder/text-builder";

@Module({
    imports: [],
    controllers: [TextBuilderController],
    providers: [TextBuilderService, TextBuilder]
})
export class TextBuilderModule {
}