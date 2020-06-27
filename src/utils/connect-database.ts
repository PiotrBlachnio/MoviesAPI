import { createConnection } from 'typeorm';
import logger from './logger';

export default async (retries = 5) => {
    while(retries) {
        try {
            await createConnection();
            break;
        } catch(error) {
            await logger.log({ type: 'error', message: error.message, place: 'Connect database function' });
            retries -=1;

            await new Promise(res => setTimeout(res, 5000));
        };
    };
};