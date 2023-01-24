import { ConnexionHandler } from "./connexionHandler";

const connexionHandler = new ConnexionHandler();

connexionHandler.run();

const path = require('path')
connexionHandler.getApp().get('*', (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, "../dist/", 'index.html'));
});
