import { Module } from '@nestjs/common';
import {TextStatisticModule} from "./text-statistic/text-statistic.module";

@Module({
  imports: [TextStatisticModule]
})
export class AppModule {}
