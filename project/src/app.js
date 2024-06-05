import express from 'express';
import morgan from 'morgan';
import homeRoute from './route/route.js';
import productRoute from './route/productRoute.js';
import swaggerApi from './api-docs.js';
import cookieParser from "cookie-parser";
import cors from 'cors';
import swaggerSpec from "./api-docs.js"
import swaggerUI from "swagger-ui-express"

const app=express();

app.use(cors({
    origin:"*"
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api',productRoute);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

export default app;

