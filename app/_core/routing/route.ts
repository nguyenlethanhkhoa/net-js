import { IRoute } from "./interfaces/route.interface";

export class Route implements IRoute {

    private _path: string;
    private _method: string;

    private _callable: any;
    private _controller: any;
    private _controllerMethod: string;

    private _isRegistered: boolean;

    constructor(path: string, method: string, controller: any, controllerMethod: string = null) {
        
        this._path = path;
        this._method = method;

        this._controller = controller;
        this._controllerMethod = controllerMethod;

        this._isRegistered = false;
    }
    
    public setPath(path: string): void {
        this._path = path;
    }

    public getPath(): string {
        return this._path;
    }

    public getMethod() {
        return this._method;
    }

    public getController(): any {
        return this._controller;
    }

    public getControllerMethod(): string {
        return this._controllerMethod;
    }

    public register(): void {
        this._isRegistered = true;
    }

    public isRegistered(): boolean {
        return this._isRegistered;
    }
}