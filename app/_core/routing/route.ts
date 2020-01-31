import { IRoute, IRouteProperties } from "./interfaces/route.interface";

export class Route implements IRoute {

    private _path: string;
    private _method: string;
    private _controller: string;

    constructor(path: string, method: string, controller: any) {
        
        this._path = path;
        this._method = method;
        this._controller = controller;
    }
    
    public setPath(path: string): void {
        this._path = path;
    }

    public getPath(): string {
        return this._path;
    }

    public setMethod(method: string) {
        this._method = method;
    }

    public getMethod() {
        return this._method;
    }
    
    public setController(controller: any) {
        this._controller = controller;
    }

    public getController(): any {
        return this._controller;
    }
}