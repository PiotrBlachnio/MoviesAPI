import { Application } from "express";
import expressLoader from './express';
import logger from '../utils/logger';

export default async (app: Application): Promise<void> => {
    process.on('uncaughtException', async (error) => {
        await logger.log({ type: 'error', message: error.message, place: 'UncaughtException' });
        process.exit(1);
    });

    process.on('unhandledRejection', async (error) => {
        await logger.log({ type: 'error', message: error, place: 'UnhandledRejection'});
    });

    expressLoader(app);
};