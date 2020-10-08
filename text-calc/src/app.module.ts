import {Module} from '@nestjs/common';
import {TextCalcModule} from "./text-calc/text-calc.module";

@Module({
    imports: [TextCalcModule]
})
export class AppModule {
}
