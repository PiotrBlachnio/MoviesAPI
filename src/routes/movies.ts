import { Router, Request, Response } from 'express';
import Movie from '../entity/Movie';

const router: Router = Router();

/**
 * @route   GET /movies
 * @desc    Get all movies
 * @access  Public
*/
router.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const movies: Movie[] = await Movie.find();
        res.status(200).json({ movies });
    } catch(error) {
        console.log(error);
    };
});

export default router;