import { ICollection } from "./interfaces/collection.interface";
import { IRoute, IRoutes } from "./interfaces/route.interface";
import * as express from "express";

export class RouteCollection implements ICollection {

    private routes: IRoutes = {};

    constructor() {
    }

    public add(name: string, route: IRoute): void {
        this.routes[name] = route;
    }

    public addCollection(routes: IRoutes): void {
        
        for (var name in routes) {
            if (!routes.hasOwnProperty(name)) {
                return;
            }

            this.add(name, routes[name]);
        }
    }

    public get(name: string): IRoute {
        
        if (this.routes[name] === null) {
            return null;
        }

        return this.routes[name];
    }

    public getAll(): IRoutes {
        return this.routes;
    }

    public remove(name: string): void {

        if (this.routes[name] === null) {
            return;
        }
    }

    public removeAll(): void {
        this.routes = {};
    }
}