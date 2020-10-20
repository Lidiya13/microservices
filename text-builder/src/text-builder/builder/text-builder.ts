import {TextBuilderInterface} from "../interface/text-builder.interface";
import {Injectable} from "@nestjs/common";

@Injectable()
export class TextBuilder implements TextBuilderInterface {
    private protocol: string;
    private host: string;
    private path: string[] = [];
    private query: Record<string, any>[] = [];

    addPath(path: string): TextBuilder {
        this.path.push(path);
        return this;
    }

    addQueryParam(query: Record<string, any>): TextBuilder {
        this.query.push(query);
        return this;
    }

    setHost(host: string): TextBuilder {
        this.host = host;
        return this;
    }

    setProtocol(protocol: string): TextBuilder {
        this.protocol = protocol;
        return this;
    }

    getUrl(): string {
        let url = this.protocol + '://' + this.host + '/' + this.path.join('/');
        if (this.query.length !== 0) {
            const [firstQueryPart, ...rest] = this.query; //деструктуризация
            const firstQueryKey = Object.keys(firstQueryPart)[0]; //получение ключей из объекта
            const firstQueryValue = Object.values(firstQueryPart)[0]; //получение значений из объекта
            url = url + '?' + firstQueryKey + '=' + firstQueryValue;
            if (rest.length !== 0) {
                for (let queryPart of rest) {
                    const queryKey = Object.keys(queryPart)[0];
                    const queryValue = Object.values(queryPart)[0];
                    url = url + '&' + queryKey + '=' + queryValue;
                }
            }
        }
        return url;
    }
}