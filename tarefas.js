const express = require ('express');

const app = express();
const port = 3000;

app.get('/tarefas', (req, res) =>{
    res.send("<h1> Página das tarefas</h1> <br> <ul><li>Nome</li><li>Criação</li><li>Descrição</li><li>status</li></ul>")
});

app.listen(port, ()=>{
    console.log(`example app listening at http://localhost: ${port}`)
})