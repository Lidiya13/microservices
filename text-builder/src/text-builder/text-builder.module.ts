import {Module} from "@nestjs/common";
import {TextBuilderController} from "./controller/text-builder.controller";
import {TextBuilderService} from "./service/text-builder.service";
import {TextBuilder} from "./builder/text-builder";
import {TextSingleton} from "./singleton/text-singleton";

@Module({
    imports: [],
    controllers: [TextBuilderController],
    providers: [TextBuilderService, TextBuilder, TextSingleton]
})
export class TextBuilderModule {
}