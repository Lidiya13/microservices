interface TextDtoOptions {
    id: string;
    message: string;
    length: number;
}

export class TextDto {
    constructor(dto: TextDtoOptions) {
        this.id = dto.id;
        this.message = dto.message;
        this.length = dto.length;
    }

    id: string;
    message: string;
    length: number;
}