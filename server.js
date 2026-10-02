const express = require('express');
const port = 5000;

const app = express();
const ideas = [
    {
        id: 1,
        title: "Build a To-Do App",
        description: "Create a simple to-do application using Express and a front-end framework of your choice."
    }
    ,
    {
        id: 2,
        title: "Create a Blog Platform",
        description: "Develop a blog platform where users can create, edit, and delete posts."
    }
];
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/ideas', (req, res) => {
  res.json({success:true, result : ideas});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});