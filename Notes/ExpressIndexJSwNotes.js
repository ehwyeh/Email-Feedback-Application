// Root file of node project

// Import express, same as "import express from 'express'" but node currently does not support ES 2015 modules, React does though.
const express = require('express');
// Generates new express application
const app = express();

/*
app - express App to register this route with
get - watch for incoming requests with this method
'/' - watch for request trying to access root route '/', localhost:5000/
req - incoming request object
res - outgoing response object
res.send({hi: 'there'}) - respond with JSON 
*/
app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

// tells node to listen for incoming traffic on port 5000
app.listen(5000);

//node index.js in terminal to run, you will see your server in localhost:5000