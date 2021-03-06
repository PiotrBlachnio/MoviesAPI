import { createConnection, Connection } from 'typeorm';
import logger from './logger';

export let connection: Connection;

export default async (retries = 5) => {
    while(retries) {
        try {
            connection = await createConnection();
            await logger.log({ type: 'info', message: 'Connected to the database successfully', place: 'Connect database function' });

            break;
        } catch(error) {
            console.log(error)
            await logger.log({ type: 'error', message: error.message, place: 'Connect database function' });
            retries -=1;

            await new Promise(res => setTimeout(res, 5000));
        };
    };
};