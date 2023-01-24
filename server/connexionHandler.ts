import express from 'express';
import { FileHandler } from './utility/fileHandler';
import { Request, Response} from "express";

interface Ressource {
    root: string;
    path: string;
    file: string;
}


export class ConnexionHandler {
    // private readonly https = require('https');
    private readonly http = require('http');
    private readonly port = process.env.PORT || 4444;
    private app = express();
    private server: any

    constructor() {
        this.server = this.http.createServer({
            // cert: fs.readFileSync('./server.cert'),
            // key: fs.readFileSync('./server.key')
        }, this.app);
    }

    public run() {
        this.server.listen(this.port, () => {
            console.log(`http://localhost:${this.port}/`)
        })

        this.dispatch();
    }

    private dispatch(): void {
        const handler = new FileHandler("./dist", this.app)
        handler.run()

        for (let i = 0; i < handler.getRessources().length; i++) {
            this.app.get('/' + handler.getNameFiles()[i], (req: Request, res: Response) => {
                res.sendFile(handler.getRessources()[i]);
            })
        }

    }

    public getServer(): any {
        return this.server;
    }

    public getApp(): any {
        return this.app;
    }
}
