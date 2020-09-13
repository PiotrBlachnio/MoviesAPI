import { Router, Request, Response } from 'express';
import Movie from '../models/Movie';
import { validate, ValidationError } from 'class-validator';
import auth from '../middlewares/auth';

const router: Router = Router();

/**
 * @route   GET /movies
 * @desc    Get all movies
 * @access  Protected
*/

router.get('/', auth, async (req: Request, res: Response): Promise<void> => {
    try {
        const movies: Movie[] = await Movie.find({ userId: req.user.id });
        res.status(200).json({ movies });
    } catch(error) {
        console.log(error);
    };
});

/**
 * @route   GET /movies/:id
 * @desc    Get specific movie by providing an id
 * @access  Protected
*/
router.get('/:id', auth, async (req: Request, res: Response): Promise<Response | void> => {
    try {
        const movie: Movie | undefined = await Movie.findOne({ id: req.params.id, userId: req.user.id });

        if(!movie) return res.send('Movie with provided id does not exist!');

        res.status(200).json({ movie });
    } catch(error) {
        console.log(error);
    };
});

/**
 * @route   POST /movies
 * @desc    Create new movie
 * @access  Protected
*/
router.post('/', auth, async (req: Request, res: Response): Promise<Response | void> => {
    try {
        const movie: Movie = Movie.create({
            title: req.body.title,
            director: req.body.director,
            year: req.body.year,
            userId: req.user.id
        });

        const errors: ValidationError[] = await validate(movie);
        if(errors.length > 0) {
            return res.status(400).json({ error: Object.values(errors[0].constraints!)[0] });
        }

        res.status(201).json({ movie: await movie.save() });
    } catch(error) {
        console.log(error);
    };
});

/**
 * @route   DELETE /movies/:id
 * @desc    Delete specific movie by proving an id
 * @access  Protected
*/
router.delete('/:id', auth, async (req: Request, res: Response): Promise<Response | void> => {
    try {
        const movie: Movie | undefined = await Movie.findOne({ id: req.params.id, userId: req.user.id });

        if(!movie) return res.send('Movie with provided id does not exist!');

        await movie.remove();

        res.status(200).send('Movie removed successfully!');
    } catch(error) {
        console.log(error);
    };
});

/**
 * @route   PATCH /movies/:id
 * @desc    Update movie by providing an id
 * @access  Protected
*/
router.patch('/:id', auth, async (req: Request, res: Response): Promise<Response | void> => {
    try {
        const movie: Movie | undefined = await Movie.findOne({ id: req.params.id, userId: req.user.id });

        if(!movie) return res.send('Movie with provided id does not exist!');

        await Movie.update({ id: movie.id, userId: req.user.id }, req.body.data);

        res.status(200).send('Movie updated successfully!');
    } catch(error) {
        console.log(error);
    };
});

export default router;