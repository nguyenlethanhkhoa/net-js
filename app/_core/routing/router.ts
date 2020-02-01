import * as express from "express";
import { Request, Response } from "express";
import { IRoute } from "./interfaces/route.interface";
import { ICollection } from "./interfaces/collection.interface";
import { RouteCollection } from "./route-collection";
import { Route } from "./route";
import { METHOD } from "./route-method";

export class Router {

    private _routeCollection: ICollection;
    private static _instance: Router;

    constructor(private app: express.Application) {
        this._routeCollection = new RouteCollection();
        Router._instance = this;
    }

    public static get(path: string, controller: any, controllerMethod: string = null, name: string = null): void {
        name = name == null ? 'get' + path : name;
        Router._instance.getRouteCollection().add(name, new Route(path, METHOD.GET, controller, controllerMethod));
    }

    public static post(path: string, controller: any, controllerMethod: string, name: string = null): void {
        name = name == null ? 'post' + path : name;
        Router._instance.getRouteCollection().add(name, new Route(path, METHOD.POST, controller, controllerMethod));
    }

    public static put(path: string, controller: any, controllerMethod: string, name: string = null): void {
        name = name == null ? 'put' + path : name;
        Router._instance.getRouteCollection().add(name, new Route(path, METHOD.PUT, controller, controllerMethod));
    }

    public static delete(path: string, controller: any, controllerMethod: string, name: string = null): void {
        name = name == null ? 'delete' + path : name;
        Router._instance.getRouteCollection().add(name, new Route(path, METHOD.DELETE, controller, controllerMethod));
    }

    public getRouteCollection(): ICollection {
        if (!this._routeCollection) {
            this._routeCollection = new RouteCollection();
        }

        return this._routeCollection;
    }

    public register(route: IRoute, _controller: any, _arguments: any[] = []): void {

        if (route.isRegistered()) {
            return;
        }

        if (typeof this[route.getMethod()] != 'function') {
            // throw exception
            return;
        }

        route.register();
        this[route.getMethod()](route.getPath(), _controller, _arguments);
    }

    private _get(path: string, _controller: any, _arguments: any[] = []): void {
        this.app.route(path).get((req: Request, res: Response) => {
            _controller(req, res);
        });
    }

    private _post(path: string, _controller: any, _arguments: any[] = []): void {
        this.app.route(path).post((req: Request, res: Response) => {
            _controller(req, res);
        });
    }

    private _put(path: string, _controller: any, _arguments: any[] = []): void {
        this.app.route(path).put((req: Request, res: Response) => {
            _controller(req, res);
        });
    }

    private _delete(path: string, _controller: any, _arguments: any[] = []): void {
        this.app.route(path).delete((req: Request, res: Response) => {
            _controller(req, res);
        });
    }
}