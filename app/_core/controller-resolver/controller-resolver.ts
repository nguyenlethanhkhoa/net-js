export class ControllerResolver {
    
    public getController(controller: any, method: string): any {

        if (controller.toString().indexOf('class') === 0 && method) {
            controller = new controller();
            return controller[method];
        }

        if (typeof controller == 'function') {
            return controller;
        }

        console.log('unsupported controller exception');
        // throw unsupported controller exception
    }
}