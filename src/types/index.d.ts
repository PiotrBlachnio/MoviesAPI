export {};

declare module 'express-serve-static-core' {
    interface Request {
       user?: {
          displayName?: string;
       }
    }
}