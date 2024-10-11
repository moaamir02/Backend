import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors"

import dotenv from 'dotenv';
dotenv.config();


const app = express();

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     Credential: true
// }))


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true  // Correct
}));



app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
// app.use(cookieParser);
app.use(cookieParser());  // Correct



import userRouter from './routes/user.routes.js'

app.use("/api/v1/users", userRouter)
export {app};