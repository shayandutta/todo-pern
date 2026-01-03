import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import todosRouter from './routes/todo.route.js';

dotenv.config();

const PORT = process.env.PORT || 5050;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/todos', todosRouter);

app.listen(PORT, ()=>{
    console.log( `Server is running on port ${PORT}` );
})