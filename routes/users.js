import express from "express";

const router = express.Router();

// Get all todos
router.get('/', (_, res) => {
    res.send('Todos List');
})

// Creating a todo
router.post('/', (_, res) => {
    res.send('Todo created!');
})

// Chaining routes
router.route('/')
.get('/', (_, res) => {
    res.send('Todos List');
})
.post('/', (_, res) => {
    res.send('Todo created!');
})

export default router;