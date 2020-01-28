import { IRoute } from "./interfaces/route.interface";


export class Route implements IRoute {

    private _path: string;
    private _method: string;
    private _controller: string;

    constructor(path: string, controller: string, method: string) {
        
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
    
    public setController(controller: string) {
        this._controller = controller;
    }

    public getController(): string {
        return this._controller;
    }
}