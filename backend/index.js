import express from 'express';
import { PORT , mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './Routes/booksRoute.js';
import cors from 'cors';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to MERN Stack Tutorial');
});

app.use(express.json());
app.use(cors());
app.use('/books', booksRoute);


mongoose.connect(mongoDBURL).then(() => {
    console.log("App is connected to database");
    app.listen(PORT, () => {
        console.log(`App is listening to port : ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
    process.exit(1); // Exit the process if unable to connect to the database
});
