import * as path from "path";
import { Request, Response } from "express";
import { APP_CONFIG } from "./../config/app-config";

export class SampleController {

    public async index(req: Request, res: Response) {
        res.status(200).send({
            text: 'aaaa'
        })
    }
}
