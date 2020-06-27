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

/**
 * @route   GET /movies/:id
 * @desc    Get specific movie by providing id
 * @access  Public
*/
router.get('/:id', async (req: Request, res: Response): Promise<Response | void> => {
    try {
        const movie: Movie | undefined = await Movie.findOne(req.params.id);

        if(!movie) return res.send('Movie with provided id does not exist!');

        res.status(200).json({ movie });
    } catch(error) {
        console.log(error);
    };
});

/**
 * @route   POST /movies
 * @desc    Create new movie
 * @access  Public
*/
router.post('/', async (req: Request, res: Response): Promise<Response | void> => {
    try {
        const movie: Movie = await Movie.create({
            name: req.body.name,
            author: req.body.author,
            stars: req.body.stars
        }).save();

        res.status(201).json({ movie });
    } catch(error) {
        console.log(error);
    };
});

export default router;