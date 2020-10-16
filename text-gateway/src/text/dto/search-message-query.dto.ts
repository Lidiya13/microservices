import {IsNotEmpty, IsString} from "class-validator";

export class SearchMessageQueryDto {
    @IsNotEmpty()
    @IsString()
    message: string;
}