const express = require("express");
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Successful!');
  });

app.listen(PORT, () => console.log('App is running on Port: ' + PORT));