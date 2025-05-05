const express = require('express');
const path = require('path'); 
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req, res) => {
  res.send('Hello World! , this  is express');
});

app.get('/contact', (req, res) => {

  res.sendFile(path.join(__dirname, 'index.html'));
 
});

app.get('/about/:name', (req, res) => {
  res.send(`Hello World <h2>This is about page my name is ${req.params.name}</h2>`);
  //          ^ Backticks used here
});




app.use(express.json());

let tasks = [];
let id = 1;

app.post('/addTask', (req, res) => {
    const task = { id: id++, taskName: req.body.taskName };
    tasks.push(task);
    res.json(task);
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.delete('/task/:id', (req, res) => {
    tasks = tasks.filter(task => task.id != req.params.id);
    res.json({ message: 'Task deleted' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
