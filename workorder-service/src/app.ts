import express from 'express';
import {json} from 'body-parser';

const app = express();

app.use(json());

app.get('/api/users', (req, res) => {
    res.status(200).send("Hello all users");
});

export{app};