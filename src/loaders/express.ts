import { Application, json } from 'express';

export default (app: Application): void => {  
    app.use(json({ limit: '10kb' }));
    app.set('trust proxy', 'uniquelocal');
};