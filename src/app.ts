import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import './database';

import router from './routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(router);

export { app };
