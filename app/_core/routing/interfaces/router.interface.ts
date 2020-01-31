import { IRoute } from "./route.interface";
import { ICollection } from "./collection.interface";

export interface IRouter {
    register(route: IRoute, controller: any);
    getRouteCollection(): ICollection;
}