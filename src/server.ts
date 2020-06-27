import express, { Application } from 'express';
import config from './assets/config';

class Server {
    public port: string;
    public app: Application;

    constructor(port: string) {
        this.port = port;
        this.app = express();
    };

    async start(): Promise<void> {
        await initLoaders(this.app);
        if(config.NODE_ENV !== 'test') this.app.listen(this.port, (): void => console.log(`Server is running on port ${this.port}`));
    };
};

const server: Server = new Server(process.env.PORT || config.PORT);
server.start();

export default server.app;