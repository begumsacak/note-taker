
const express = require("express");
const app = express();
// selecting a PORT
//necessary for deploying to Heroku
const PORT = process.env.PORT || 3000;
const fs = require("fs")
//The Path module provides a way of working with directories and file paths.
const path = require("path")
// db.json file will be used to store and retrieve notes using the fs module
const db = "./db.json"
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// references the public folder - frontEnd assets
app.use(express.static("public"))

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//listener
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`)
})
