import {TextBuilderInterface} from "../interface/text-builder.interface";
import {Injectable} from "@nestjs/common";


export class Director {
    private builder: TextBuilderInterface;

    public setBuilder(builder: TextBuilderInterface): void {
        this.builder = builder;
    }

    public buildUrlAddress(): void {
        this.builder.protocol();
        this.builder.domain();
        this.builder.path();
        this.builder.queryParameters();
    }
}