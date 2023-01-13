import express from 'express';
import path from 'path';


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
            console.log(`Listening on ${this.port}`)
        })

        this.dispatch();
    }

    private dispatch(): void {
        let ressources: Array<Ressource> = [
            { root: '/', path: '../dist', file: 'index.html' },
            { root: '/main.js', path: '../dist', file: 'main.js' },
            { root: '/roots.css', path: '../dist/static/style', file: 'roots.css' }]

        for (const ressource of ressources) {
            this.app.get(ressource.root, (req, res) => {
                res.sendFile(path.join(__dirname, ressource.path, ressource.file));
            })
        }
    }

    public getServer(): any {
        return this.server;
    }
}
