// Root file of node project

const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send({loveYou: 'carnie'});
});

const PORT = process.env.PORT || 5000; 
// applicaition link https://rocky-oasis-53450.herokuapp.com/
app.listen(PORT);
