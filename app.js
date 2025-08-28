import express from 'express';
import tasksRouter from './routes/tasks.js';
import bodyParser from 'body-parser';

const app = express();

// Configura la aplicación para procesar los cuerpos de las solicitudes en formato JSON y URL-encoded.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conecta el enrutador de tareas a la ruta '/tasks'.
app.use('/tasks', tasksRouter);

// Define una ruta para el endpoint raíz, enviando una respuesta simple.
app.get('/', (req, res) => {
  res.send('Hola mundo');
});

// Inicia el servidor en el puerto 3000.
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});