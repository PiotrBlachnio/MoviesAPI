import { Router, Request, Response } from 'express';
import logger from '../utils/logger';

const router: Router = Router();

/**
 * @route   Default
 * @desc    Rendered when url is not found
 * @access  Public
*/
router.all('/', async (req: Request, res: Response): Promise<void> => {
    await logger.log({ type: 'info', message: 'Route not found!', place: 'Default route' });
    res.status(404).send('Route not found! Check your url and try again!');
});

export default router;