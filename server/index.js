require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const Auth0Strategy = require("passport-auth0");

const passport = require("passport");
const massive = require("massive");
const strategy = require("./strategy");
//controllers
const folder = require("./controllers/folder_controller");
const file = require("./controllers/file_controller");
const upload = require("./controllers/upload_controller");
const textDetect = require("./controllers/textDetect_controller");
const transcribe = "./controllers/transcribe_controller";

const { PORT, SESSION_SECRET, DOMAIN, CLIENT_ID, CLIENT_SECRET } = process.env;

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

passport.use(
  new Auth0Strategy(
    {
      domain: DOMAIN,
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: "/auth",
      scope: "openid email profile"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      const dbInstance = app.get("db");
      const { id } = profile;
      const email = profile.emails[0].value;

      if (profile) {
        dbInstance.find_user(id).then(results => {
          let user = results[0];
          return done(null, user);
        });
      } else {
        dbInstance
          .create_user([id, email])
          .then(results => {
            console.log("create user results", results);
            let user = results[0];
            return done(null, user);
          })
          .catch(error => console.log("error", error));
      }
    }
  )
);

// determines which data of the user obj to store in session
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

// AUTH ENDPOINTS
// update auth endpoints if needed
app.get(
  "/auth",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/user",
    failureRedirect: "/auth/callback"
  })
);

app.get("/auth/callback", (req, res, next) => {
  console.log("hitting /dash");
  if (!req.user) {
    res.redirect("/");
    console.log(req);
    return res.status(401).send("Log in required");
  } else {
    res.status(200).send(req.user);
  }
});

// app.get("/api/authenticate", (req, res, next) => {
//   const dbInstance = app.get("db");
//   const { username, password } = req.params;

//   dbInstance.find_user(username, password).then(user => {
//     if (username && password) {
//       return user;
//     } else {
//       dbInstance.create_user(username, password, email);
//     }
//   });
// });
// FOLDER ENDPOINTS
app.post("/api/add/folder", folder.createFolder);
app.get("/api/folder/:id", folder.readFolder);
app.get("/api/folders", folder.readFolders);
app.delete("/api/folder/:id", folder.deleteFolder);
app.put("/api/folder/:id", folder.updateFolderName);

// FILE ENDPOINTS
app.post("/api/add/file", file.newFile);
app.get("/api/file/:id", file.readFile);
app.get("/api/files", file.readFiles);
app.delete("/api/file/:id", file.deleteFile);
app.put("/api/file/:id", file.updateFile);

// UPLOAD ENDPOINTS
app.post("/api/aws", upload.sign); // s3 upload
app.post("/api/save/info", upload.saveUploadInfo); // hit this right after s3 response

// TRANSCRIPT ENDPOINTS
app.post("/api/textDetect", textDetect.transcript); // aws rekognition textDetect, 1st

// AWS TRANSCRIBE ENDPOINT
// app.post("/api/audio/transcribe", transcribe.audioTranscribe);

// app.get("/api/transcript/:id", transcript.readTranscript);
// app.post("/api/textDetect/response", transcript.saveOrigResponse); // 2nd
// app.post("/api/save/transcript", transcript.saveTranscript); // 3rd

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
