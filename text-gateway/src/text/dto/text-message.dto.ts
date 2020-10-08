import {IsString} from "class-validator";

interface TextMessageDtoOptions {
    message: string
}

export class TextMessageDto {
    constructor(messageInit: TextMessageDtoOptions) {
        this.message = messageInit.message
    }

    @IsString()
    message: string;
}