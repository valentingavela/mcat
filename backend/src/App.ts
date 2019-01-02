import * as express from 'express'
import { router } from './routes';
class App {
    public express

    constructor() {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes(): void {
        
    }
}

export default new App().express