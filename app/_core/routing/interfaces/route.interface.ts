export interface IRoute {

    setPath(path: string): void;
    getPath(): string;

    setController(controller: any);
    getController(): any;

    setMethod(method: string): void;
    getMethod(): string;
}

export interface IRoutes {
    [index: string]: IRoute;
}

export interface IRouteProperties {
    [index: string]: any;
}