import express from 'express';
import tasksRouter from './routes/tasks.js';



const app = express();

app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

