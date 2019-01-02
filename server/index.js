require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const Auth0Strategy = require("passport-auth0");

const passport = require("passport");
const massive = require("massive");

const { PORT, DOMAIN, CLIENT_ID, CLIENT_SECRET, SESSION_SECRET } = process.env;

const app = express();

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + "/../build"));

massive(process.env.DB_CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(error => console.log(error));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
