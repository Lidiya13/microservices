import {Module} from '@nestjs/common';
import {TextModule} from "./text/text.module";

@Module({
    imports: [
        TextModule
    ]
})
export class AppModule {
}