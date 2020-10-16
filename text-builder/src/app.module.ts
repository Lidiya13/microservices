import { Module } from '@nestjs/common';
import {TextBuilderModule} from "./text-builder/text-builder.module";

@Module({
  imports: [TextBuilderModule],
})
export class AppModule {}
