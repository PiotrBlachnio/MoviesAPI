import 'dotenv/config';

const secrets = {
    NODE_ENV: process.env.NODE_ENV!,
    CLIENT_ID: process.env.CLIENT_ID!,
    CLIENT_SECRET: process.env.CLIENT_SECRET!,
    CALLBACK_URL: process.env.CALLBACK_URL!
};

const defaults = {
    PORT: '4001'
};

export default {
    ...defaults,
    ...secrets
};