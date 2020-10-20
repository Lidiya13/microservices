import {Injectable} from "@nestjs/common";
import {TextBuilder} from "../builder/text-builder";

@Injectable()
export class TextBuilderService {
    constructor(
        private readonly builder: TextBuilder
    ) {
    }

    getUrl(): string {
        this.builder
            .setProtocol('https')
            .setHost('refactoring.guru')
            .addPath('ru')
            .addPath('design-patterns')
            .addPath('builder')
            .addQueryParam({name: 'Alice'})
            .addQueryParam({city: 'Yoshkar-Ola'})
            .addQueryParam({age: 20});
        return this.builder.getUrl();
    }
}