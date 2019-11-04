import * as path from "path";
import * as logger from "morgan";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as createError from "http-errors";
import * as cookieParser from "cookie-parser";

import { Route } from './route/route';
import { APP_CONFIG } from './config/app-config';

export class App {

    private static app: App = null;
    private express: express.Application;

    private constructor() {
        this.express = express();
        this._config();
    }

    public static getInstance(): App {
        App.app = App.app || null;
        if (App.app == null) {
            App.app = new App();
        }

        return App.app;
    }

    public getApp(): express.Application {
        return this.express;
    }

    public setRoutes(): void {
        let route: Route = new Route();
        route.routes();
    }

    private _config(): void {

        // http log
        this.express.use(logger('dev'));

        // support application/json type post data
		this.express.use(express.json());

        // support application/x-www-form-urlencoded post data
		this.express.use(express.urlencoded({ extended: false }));

        this.express.use(cookieParser());

        this.express.use(express.static(path.join(__dirname, 'public')));
    }
}
