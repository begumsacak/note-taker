const fs = require("fs")
// db.json file will be used to store and retrieve notes using the fs module
const db = "./public/assets/db.json"
const util = require('util');

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" and interacts with a page.

    const asyncWriteFile = util.promisify(fs.writeFile)
    app.get("/api/notes", function (req, res) {
        res.json(db);
    });


    app.post("/api/notes", (req, res) => {
        asyncWriteFile("./db/db.json", req.body, function (err, data) {
            if (err) console.log(err);
            return data
        })
    });

}