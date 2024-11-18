import express, { Request, Response } from 'express';
import { db } from '../database';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const { subjectName } = req.body;
        if (await db.models.Subject.findOne({ where: { name: subjectName } })) {
            throw new Error("Subject already exists.")
        }
        const subject = await db.models.Subject.create({ name: subjectName });
        res.status(201).json(subject);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (_req: Request, res: Response) => {
    try {
        const subjects = await db.models.Subject.findAll({
            include: {
                model: db.models.Subject,
                as: 'subjects',
            },
        });
        res.status(200).json(subjects);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
