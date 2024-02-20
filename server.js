const express = require("express");
const pug = require('pug');
const app = express();
const PORT = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { title: 'Fruits Page' })
  })

  app.get('/:fruit', (req, res) => {
    res.render('index', { title: 'Fruits Page' })
  })

app.listen(PORT, () => console.log('App is running on Port: ' + PORT));