import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from 'mongoose';

export type TextDocument = Text & Document;

@Schema()
export class Text {
    @Prop()
    message: string;

    @Prop()
    length: number;
}

export const TextStatisticSchema = SchemaFactory.createForClass(Text);