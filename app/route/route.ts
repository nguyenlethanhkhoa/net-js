import { Router } from './../_core/routing/router';
import { SampleController } from './../controller/sample.controller';

export class Route {
    
    public execute(): void {

        Router.get('/', SampleController, 'index');
    }
}
