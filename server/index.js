import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import RoomModel from './models/roomModel.js';
import UserModel from './models/userModel.js';

import AuthRoute from './routes/AuthRoute.js';

const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

dotenv.config();
const username = process.env.USERNAME;
const password = process.env.PASSWD;
const host = process.env.HOST;
const port = process.env.PORT;

await mongoose
    .connect(host)
    .then(() => {
        app.listen(port, () => {
            console.log(`hello express ${port}`);
        })
    })
    .catch(() => {
        console.log('ket noi that bai');
    })

app.use('/auth', AuthRoute);