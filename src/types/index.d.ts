export {};

declare module 'express-serve-static-core' {
    interface Request {
       user: {
         _json: {
            name: string;
            email: string;
         },
         id: string;
       },
       session: {
         passport: {
            user: {
               id: string;
            }
         },
         save: () => {}
       } | null
    }
}