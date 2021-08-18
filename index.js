// Root file of node project

const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();


// Tells passport to create a new GoogleStrategy instance
passport.use(new GoogleStrategy());

app.get('/', (req, res) => {
  res.send({loveYou: 'carnie'});
});

const PORT = process.env.PORT || 5000; 
// applicaition link https://rocky-oasis-53450.herokuapp.com/
app.listen(PORT);
