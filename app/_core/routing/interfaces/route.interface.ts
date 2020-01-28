export interface IRoute {

    setPath(path: string): void;
    getPath(): string;

    setController(controller: string);
    getController(): string;

    setMethod(method: string): void;
    getMethod(): string;
}

export interface IRoutes {
    [index: string]: IRoute;
}