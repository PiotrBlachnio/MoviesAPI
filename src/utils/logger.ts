import Logger from '@stargaze/logger';
import config from '../assets/config';

export default new Logger({
    path: `${__dirname}/../../logs`,
    filename: `${config.NODE_ENV}.log`
});