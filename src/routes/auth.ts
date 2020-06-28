import { Router, Response, Request } from 'express';
import logger from '../utils/logger';
import passport from 'passport';
import User from '../models/User';

const router: Router = Router();

/**
 * @route   GET /auth/google
 * @desc    Authorize user using Google Service
 * @access  Public
*/
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

/**
 * @route   GET /auth/google/callback
 * @desc    Redirect user either to success or failure route
 * @access  Public
*/
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/home/unauthorized' }), async (req: Request, res: Response): Promise<void> => {
    await logger.log({ type: 'info', message: 'Redirecting user...', place: 'Callback route' });
    res.redirect('/home/dashboard');

    try {
        const existingUser: User | undefined = await User.findOne({ email: req.user._json.email });

        if(!existingUser) {
            const user: User = await User.create({
                name: req.user._json.name,
                email: req.user._json.email
            });
        };
    } catch(error) {
        console.log(error);
    };
});

/**
 * @route   GET /auth/logout
 * @desc    Logout user
 * @access  Protected
*/
router.get('/logout', (req, res) => {
    req.session = null;
    req.logout();

    res.redirect('/home/guest');
});

export default router;