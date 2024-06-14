import { app, server } from './scoket/socket.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import express from 'express';
import path from 'path';

import dbConnect from './db/dbConnect.js';

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js'

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve()

dotenv.config();
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth",authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


app.use(express.static(path.join(__dirname, '/frontend/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/dist/index.html'))
})

dbConnect()
.then(() => {
    app.on('error', (error) => {
        console.error('Express app encountered an error:', error);
        throw error;
    });
    server.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log('MONGODB connected failed !!!', err)
})