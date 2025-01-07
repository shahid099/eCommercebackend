import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();
// Modules Imports
import router from './routes/index.js';
import connectDB from './config/db.js';

const app = express();
app.use(cookieParser())
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json())
app.use('/api', router);

const PORT = 8080 || process.env.PORT

connectDB().then(()=> {
    app.listen(PORT, ()=> {
        console.log("Connected to DB");
        console.log("Server is running: 8080");
    });
});