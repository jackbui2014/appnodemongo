import express from 'express';
import mongoose from 'mongoose';
const app = express();
const PORT = 4000;

const db = mongoose.connect('mongodb://localhost/productsdb');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import { routes } from './src/routes/routes';
routes(app);

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);
