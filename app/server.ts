import * as Http from "http";
import { App } from "./app";
import { APP_CONFIG } from "./config/app-config";

class Server {

    public server: any;

    constructor() {

        App.getInstance().setRoutes();
        App.getInstance().getApp().set('port', this.normalizePort(APP_CONFIG.PORT));

        this.server = Http.createServer(App.getInstance().getApp());
        this.server.listen(this.normalizePort(APP_CONFIG.PORT));
        this.server.on('error', this.onError);
        this.server.on('listening', this.onListening);
    }

    private normalizePort(val) {
        var port = parseInt(val, 10);

        if (isNaN(port)) {
            // named pipe
            return val;
        }

        if (port >= 0) {
            // port number
            return port;
        }

        return false;
    }


    onError(error) {
        // if (error.syscall !== 'listen') {
        //     throw error;
        // }
        //
        // var bind = typeof APP_CONFIG.PORT === 'string' ? 'Pipe ' + APP_CONFIG.PORT : 'Port ' + APP_CONFIG.PORT;
        //
        // // handle specific listen errors with friendly messages
        // switch (error.code) {
        //     case 'EACCES':
        //         console.error(bind + ' requires elevated privileges');
        //         process.exit(1);
        //         break;
        //     case 'EADDRINUSE':
        //         console.error(bind + ' is already in use');
        //         process.exit(1);
        //         break;
        //     default:
        //         throw error;
        // }
    }

    onListening() {
        console.log('Listening on port:' + APP_CONFIG.PORT)
    }
}

export default new Server();
