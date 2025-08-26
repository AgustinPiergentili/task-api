import express from 'express';
import tasksRouter from './routes/tasks.js';
import bodyParser from 'body-parser';



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

