import { App } from './../app';
import { Request, Response } from "express";
import { SampleController } from "./../controller/sample.controller";

export class Route {

    protected sampleController: SampleController;

    constructor() {
        this.sampleController = new SampleController();
    }

    public routes(): void {
        App.getInstance().getApp().route('/').get(this.sampleController.index);
    }
}
