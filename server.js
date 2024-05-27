import express from 'express';
import usersRouter from './routes/users.js';
import todosRouter from './routes/todos.js';

// Initialize the app
const app = express();

app.use(express.json());

app.get('/', (_, res) => {
    res.send('<h1>Api is running!!!</h1>');
})

// Mounting routers
app.use('/users', usersRouter);
app.use('/todos', todosRouter);

const port = 4000;
app.listen(port, () => console.log(`Server started on port ${port}...`))