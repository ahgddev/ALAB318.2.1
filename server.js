const express = require("express");
const pug = require('pug');
const app = express();
const PORT = 3000;

let fruits = ["apple","banana","grape"];

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { title: 'Fruits Page' })
  })



app.listen(PORT, () => console.log('App is running on Port: ' + PORT));