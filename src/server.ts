import express, { Application } from 'express';
import initLoaders from './loaders';
import config from './assets/config';
import passport from 'passport';
import './loaders/passport';

const isLoggedIn = (req, res, next) => {
    if(req.user) {
        next();
    } else {
        res.sendStatus(401);
    };
};

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

server.app.get('/', (req, res) => res.send('You are not logged in!'));

server.app.get('/failure', (req, res) => res.send('Auth failed!'));

server.app.get('/success', isLoggedIn, (req, res) => res.send(`Auth success. Logged in as: ${req.user?.displayName}`));

server.app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

server.app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/success');
});

server.app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
});

export default server.app;