import {Injectable} from "@nestjs/common";


export class Url {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Url parts: ${this.parts.join(', ')}\n`);
    }
}