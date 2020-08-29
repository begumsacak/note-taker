
//The Path module provides a way of working with directories and file paths.
const path = require("path")

module.exports = function (app) {
    //adding routes
    // respond with "index.html" when a GET request is made to the homepage
    //__dirname tells us the absolute path of the directory containing the currently executing file (from https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname)

    app.get("/", (req, res) => {
        res.sendFile((path.join)(__dirname, "..public/index.html"));
    });

    // respond with "notes.html" when a GET request is made to the homepage
    app.get("/notes", (req, res) => {
        res.sendFile((path.join)(__dirname, "../public/notes.html"));
    });
 // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

}