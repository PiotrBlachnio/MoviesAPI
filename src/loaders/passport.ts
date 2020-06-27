import passport from 'passport';
import { Strategy } from 'passport-google-oauth20';
import config from '../assets/config';

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(new Strategy({
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
    callbackURL: config.CALLBACK_URL },
    (accessToken, refreshToken, profile, done) => {
        return done(undefined, profile);
}));