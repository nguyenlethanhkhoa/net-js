import * as express from "express";
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

    public static get(path: string, controller: any, name: string = null): void {
        name = name == null ? path : name;
        Router._instance.getRouteCollection().add(name, new Route(path, METHOD.GET, controller));
    }

    public static post(path: string, controller: any, name: string = null): void {
        name = name == null ? path : name;
        Router._instance.getRouteCollection().add(name, new Route(path, METHOD.POST, controller));
    }

    public static put(path: string, controller: any, name: string = null): void {
        name = name == null ? path : name;
        Router._instance.getRouteCollection().add(name, new Route(path, METHOD.PUT, controller));
    }

    public static delete(path: string, controller: any, name: string = null): void {
        name = name == null ? path : name;
        Router._instance.getRouteCollection().add(name, new Route(path, METHOD.DELETE, controller));
    }

    public getRouteCollection(): ICollection {
        if (!this._routeCollection) {
            this._routeCollection = new RouteCollection();
        }

        return this._routeCollection;
    }

    public register(route: IRoute, controller: any): void {
        if (typeof this[route.getMethod()] != 'function') {
            // throw exception
            return;
        }

        route.setController(controller);
        this[route.getMethod()](route);
    }

    private _get(route: IRoute): void {
        this.app.route(route.getPath()).get(route.getController());
    }

    private _post(route: IRoute): void {
        this.app.route(route.getPath()).post(route.getController());
    }

    private _put(route: IRoute): void {
        this.app.route(route.getPath()).put(route.getController());
    }

    private _delete(route: IRoute): void {
        this.app.route(route.getPath()).delete(route.getController());
    }
}