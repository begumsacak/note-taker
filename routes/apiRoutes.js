const fs = require("fs")
// db.json file will be used to store and retrieve notes using the fs module
const db = "./db.json"
const util = require('util');
const { request } = require("express");

//module exports are used to require this function in other js files
module.exports = function (app) {
    let userNotes = []
    // API GET Requests
    // Below code handles when users "visit" and interacts with a page.

    const asyncWriteFile = util.promisify(fs.writeFile)
    app.get("/api/notes", function (req, res) {
        fs.readFile(db, "utf8", function (err, data) {
            userNotes = JSON.parse(data);

            console.log(userNotes)
            if (err) throw err;
            //do operation on data that generates data
            return userNotes;
        });
        res.json(db);
    });


    app.post("/api/notes", (req, res) => {
        console.log(req.body)
            asyncWriteFile(db, JSON.stringify(req.body), function (err, data) {
                userNotes.push(data)
                if (err) console.log(err);
                res.json(userNotes)
            });
        });
    }
