export {};

declare module 'express-serve-static-core' {
    interface Request {
       user: {
         _json: {
            name: string;
            email: string;
         }
       }
    }
}