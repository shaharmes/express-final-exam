import bodyParser from 'body-parser';
import express from 'express';
import bmi, { BmiOutput } from './bmi';
// import validator from './validator';

const app = express();

app.get('/bmi', (req, res) => {
    const height = Number(req.query.height);
    const heightUnit = Number(req.query.heightUnit);
    const weightUnit = Number(req.query.weightUnit);
    const weight = Number(req.query.weight);
    const bmiOut: BmiOutput = bmi({height, heightUnit, weight, weightUnit});
    res.send(bmiOut);
});

app.post('/bmi', bodyParser.json(), (req, res) => {
    const height = Number(req.body.height);
    const heightUnit = Number(req.body.heightUnit);
    const weightUnit = Number(req.body.weightUnit);
    const weight = Number(req.body.weight);
    const bmiOut: BmiOutput = bmi({height, heightUnit, weight, weightUnit});
    res.send(bmiOut);
});



export default app;
