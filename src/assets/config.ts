import 'dotenv/config';

const secrets = {
    NODE_ENV: process.env.NODE_ENV!
};

const defaults = {
    PORT: '4000'
};

export default {
    ...defaults,
    ...secrets
};