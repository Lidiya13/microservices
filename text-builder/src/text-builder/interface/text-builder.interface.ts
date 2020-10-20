export interface TextBuilderInterface {
    setProtocol(protocol: string): void;
    setHost(host: string): void;
    addPath(path: string): void;
    addQueryParam(query: Record<string, any>): void;
    getUrl(): string;
}