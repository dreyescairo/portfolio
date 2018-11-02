const express = require("express");
const mongoose = require("mongoose");

//*************************ROUTES GO HERE************************* */

//*************************EXPRESS INIT()************************* */
const app = express();

//*************************BODY-PARSER************************* */
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//*************************DATABASE************************* */

//dbconfig either from the file locally or a env variable
const db = require("./config/keys").mongoURI || process.env.MONGOURI;

//connect to mongodb
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log("***ERROR***: " + err));

//*************************PASSPORT************************* */

//passport middleware
app.use(passport.initialize());
//passport config
require("./config/passport.js")(passport);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port `, port));
