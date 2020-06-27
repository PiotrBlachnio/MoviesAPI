import { Router, Response, Request } from 'express';
import logger from '../utils/logger';
import auth from '../middlewares/auth';

const router: Router = Router();

/**
 * @route   GET /home/guest
 * @desc    Rendered when user is not logged in
 * @access  Public
*/
router.get('/guest', async (req: Request, res: Response): Promise<void> => {
    await logger.log({ type: 'info', message: 'Rendered guest page', place: 'Guest route' });
    res.send('Welcome on the guest page!');
});

/**
 * @route   GET /home/unauthorized
 * @desc    Rendered when user is unauthorized
 * @access  Public
*/
router.get('/unauthorized', async (req: Request, res: Response): Promise<void> => {
    await logger.log({ type: 'info', message: 'Rendered unauthorized page', place: 'Unauthorized route' });
    res.send('You are not authorized!');
});

/**
 * @route   GET /home/dashboard
 * @desc    Rendered when user is logged in
 * @access  Protected
*/
router.get('/dashboard', auth, async (req: Request, res: Response): Promise<void> => {
    await logger.log({ type: 'info', message: 'Rendered dashboard page', place: 'Dashboard route' });
    res.send(`Welcome on the dashboard! \n Logged in as: ${req.user?.displayName}`);
});

export default router;