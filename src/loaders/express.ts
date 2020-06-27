import { Application, json } from 'express';
import passport from 'passport';
import cookieSession from 'cookie-session';

export default (app: Application): void => {  
    app.use(json({ limit: '10kb' }));
    app.set('trust proxy', 'uniquelocal');

    app.use(cookieSession({
        name: 'Movies-API-session',
        keys: ['key1', 'key2']
    }));

    app.use(passport.initialize());
    app.use(passport.session());
};