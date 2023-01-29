import type { NextFunction, Request, Response } from 'express';


/**
 * The middleware should check if the payload valid
 * @param req
 * @param res
 * @param next
 */
export default function validator(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'GET') {
        const height = Number(req.query.height);
        const heightUnit = Number(req.query.heightUnit);
        const weightUnit = Number(req.query.weightUnit);
        const weight = Number(req.query.weight);

        if (isNaN(height) || isNaN(heightUnit) || isNaN(weightUnit) || isNaN(weight)) {
            res.status(400).send('Bad GET request');
        }
    }
    else if (req.method === 'POST') {
        const height = Number(req.body.height);
        const heightUnit = Number(req.body.heightUnit);
        const weightUnit = Number(req.body.weightUnit);
        const weight = Number(req.body.weight);

        if (isNaN(height) || isNaN(heightUnit) || isNaN(weightUnit) || isNaN(weight)) {
            res.status(400).send('Bad POST request');
        }
    }
    else {
        res.status(400).send('Bad request');
    }
    next();
}
