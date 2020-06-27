import { Application } from "express";
import expressLoader from './express';
import logger from '../utils/logger';
import connectDatabase from '../utils/connect-database';

export default async (app: Application): Promise<void> => {
    process.on('uncaughtException', async (error) => {
        await logger.log({ type: 'error', message: error.message, place: 'UncaughtException' });
        process.exit(1);
    });

    process.on('unhandledRejection', async (error) => {
        await logger.log({ type: 'error', message: error, place: 'UnhandledRejection'});
    });

    connectDatabase();
    expressLoader(app);
};