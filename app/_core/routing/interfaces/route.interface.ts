export interface IRoute {

    setPath(path: string): void;
    getPath(): string;
    getMethod(): string;

    getController(): any;
    getControllerMethod(): string;

    register(): void;
    isRegistered(): boolean;
}

export interface IRoutes {
    [index: string]: IRoute;
}

export interface IRouteProperties {
    [index: string]: any;
}