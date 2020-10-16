import {Module} from "@nestjs/common";
import {TextBuilderController} from "./controller/text-builder.controller";
import {TextBuilderService} from "./service/text-builder.service";

@Module({
    imports: [],
    controllers: [TextBuilderController],
    providers: [TextBuilderService]
})
export class TextBuilderModule {
}