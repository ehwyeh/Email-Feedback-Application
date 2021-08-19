// Root file of node project

const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys.js");
const app = express();

// Tells passport to create a new GoogleStrategy instance
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
app.get("/", (req, res) => {
  res.send({ loveYou: "cae" });
});

const PORT = process.env.PORT || 5000;
// applicaition link https://rocky-oasis-53450.herokuapp.com/
app.listen(PORT);
