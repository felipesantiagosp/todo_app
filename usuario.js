const express = require ('express');

const app = express();
const port = 3000;

app.get('/usuario', (req, res) =>{
    res.send("<h1> Página dos usuarios</h1> <br> <ul><li>ID</li><li>Email</li>")
});

app.listen(port, ()=>{
    console.log(`example app listening at http://localhost: ${port}`)
})