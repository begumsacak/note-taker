
//The Path module provides a way of working with directories and file paths.
const path = require("path")
// db.json file will be used to store and retrieve notes using the fs module


module.exports = function (app) {
    //adding routes
    // respond with "index.html" when a GET request is made to the homepage
    //__dirname tells us the absolute path of the directory containing the currently executing file (from https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname)

    app.get("/", (req, res) => {
        res.sendFile((path.join)(__dirname, "index.html"));
    });

    // respond with "notes.html" when a GET request is made to the homepage
    app.get("/notes", (req, res) => {
        res.sendFile((path.join)(__dirname, "../public/notes.html"));
    });

}