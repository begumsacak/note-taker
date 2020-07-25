
const express = require("express");
const app = express();
// selecting a PORT
var PORT = 3000;
const fs = require("fs")
//The Path module provides a way of working with directories and file paths.
const path = require("path")



//adding routes
// respond with "notes.html" when a GET request is made to the homepage
//__dirname tells us the absolute path of the directory containing the currently executing file (from https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname)
app.get("/", (req, res) => {
    res.sendFile((path.join)(__dirname, "public", "index.html"));
});

app.get("/", (req, res) => {
    res.sendFile((path.join)(__dirname, "public", "notes.html"));
});

//listener
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`)
})
