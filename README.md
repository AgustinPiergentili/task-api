# API de Tareas Sencilla

Proyecto simple de una API REST para gestionar una lista de tareas, creado con Node.js y Express.

**Importante:** Las tareas se guardan en la memoria del servidor y se eliminan si este se detiene.

---

## ⚙️ Requisitos e Instalación

Para que el proyecto funcione, primero necesitás tener [Node.js](https://nodejs.org/) instalado en tu sistema.

Luego, la única librería principal que este proyecto necesita descargar es **Express.js**. Para instalarla, junto con las demás dependencias de desarrollo, simplemente abrí una terminal en la carpeta del proyecto y ejecutá:

```bash
npm install express
```
Este comando leerá el archivo `package.json` e instalará todo lo necesario.

---

## ▶️ Ejecución

Una vez instaladas las dependencias, iniciá el servidor con el comando:

```bash
npm start
```
La API estará disponible y escuchando en `http://localhost:3000`.

---

## 📖 Endpoints de la API

* `GET /tasks` - Obtiene todas las tareas.
* `GET /tasks/:id` - Obtiene una tarea por su ID.
* `POST /tasks` - Crea una nueva tarea.
* `PUT /tasks/:id` - Actualiza una tarea existente.
* `DELETE /tasks/:id` - Elimina una tarea.