import {Injectable} from "@nestjs/common";
import {TextBuilderInterface} from "../interface/text-builder.interface";
import {Url} from "./url.builder";

@Injectable()
export class Builder implements TextBuilderInterface {
    private url: Url;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.url = new Url();
    }

    public protocol(): void {
        this.url.parts.push();
    }

    public domain(): void {
        this.url.parts.push();
    }

    public path(): void {
        this.url.parts.push();
    }

    public queryParameters(): void {
        this.url.parts.push();
    }

    public getUrl(): Url {
        const result = this.url;
        this.reset();
        return result;
    }
}





