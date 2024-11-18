import express, { Request, Response } from 'express';
import { db } from '../database';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {

});

router.get('/', async (_req: Request, res: Response) => {
    res.status(200).json({ Message: "Hello World" });
});

export default router;
