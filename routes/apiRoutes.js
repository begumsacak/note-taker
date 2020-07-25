const fs = require("fs")
// db.json file will be used to store and retrieve notes using the fs module
const db = "./public/assets/db.json"
const util = require('util');

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    const asyncWriteFile = util.promisify(fs.writeFile)
    app.get("/api/notes", function (req, res) {
        res.json(db);
    });

   
    app.post("/api/notes", (req, res) => {
        asyncWriteFile("./db/db.json", req.body, function (err, data) {
            if (err) return console.log(err);
            return data
        })
    });


}