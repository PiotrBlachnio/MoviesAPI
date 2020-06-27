import { Application } from 'express';
import routes from '../routes';

export default (app: Application): void => {
    app.use('/home', routes.home);
    app.use('/auth', routes.auth);
    app.use('*', routes.defaultRoute);
};