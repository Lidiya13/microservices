interface SearchResponseDtoOptions {
    id: string;
    message: string;
}

export class SearchResponseDto {
    constructor(dto: SearchResponseDtoOptions) {
        this.id = dto.id;
        this.message = dto.message;
    }

    id: string;
    message: string;
}