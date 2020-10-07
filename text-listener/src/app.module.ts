import {Module} from '@nestjs/common';
import {TextListenerModule} from "./text-listener/text-listener.module";

@Module({
    imports: [TextListenerModule]
})
export class AppModule {
}