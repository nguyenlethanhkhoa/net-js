import * as path from "path";
import * as logger from "morgan";
import * as express from "express";
import * as createError from "http-errors";
import * as cookieParser from "cookie-parser";

import { Route } from './route/route';
import { IRoutes } from "./_core/routing/interfaces/route.interface";
import { Router } from "./_core/routing/router";
import { IRouter } from "./_core/routing/interfaces/router.interface";
import { ControllerResolver } from "./_core/controller-resolver/controller-resolver";

export class App {

    private _app: express.Application;
    private static _instance: App = null;

    private _route: Route;
    private _router: Router;

    private _controllerResolver: ControllerResolver;

    private constructor() {
        this._app = express();
        this._config();
        this._router = new Router(this._app);
    }

    public static getInstance(): App {
        App._instance = App._instance || null;
        if (App._instance == null) {
            App._instance = new App();
        }

        return App._instance;
    }

    public getApp(): express.Application {
        return this._app;
    }

    public setRoutes(): void {
        this._route = new Route();
        this._route.execute();

        const routes: IRoutes = this._getRouter().getRouteCollection().getAll();
        
        for (let name in routes) {
            if (!routes.hasOwnProperty(name)) {
                continue;
            }

            this._app.use(routes[name].getPath(), (req, res, next) => {
                const route = routes[name];
                const controller = this._getControllerResolver().getController(route.getController(), route.getControllerMethod());
                
                this._getRouter().register(routes[name], controller);
                next();
            });
        }
    }

    private _getControllerResolver(): ControllerResolver {

        if (!(this._controllerResolver instanceof ControllerResolver)) {
            this._controllerResolver = new ControllerResolver();
        }

        return this._controllerResolver;
    }

    private _getRouter(): Router {
        if (!(this._router instanceof Router)) {
            this._router = new Router(this.getApp());
        }

        return this._router;
    }

    private _config(): void {

        // http log
        this._app.use(logger('dev'));

        // support application/json type post data
		this._app.use(express.json());

        // support application/x-www-form-urlencoded post data
		this._app.use(express.urlencoded({ extended: false }));

        this._app.use(cookieParser());

        this._app.use(express.static(path.join(__dirname, 'public')));
    }
}
