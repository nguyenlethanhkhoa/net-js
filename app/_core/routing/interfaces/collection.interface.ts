import { IRoute, IRoutes } from "./route.interface";

export interface ICollection {

    add(name: string, route: IRoute): void;
    addCollection(routes: IRoutes): void;

    get(name: string): IRoute;
    getAll(): IRoutes;

    remove(name: string): void;
    removeAll(): void;
}