const express = require("express");
const cors = require('cors')
const server = express();

server.use(cors())
const fs = require("fs");

server.get("/health", (req, res) => {
    res.send({"message": "This is PO Book"})
})

server.get("/pricelist/:model", (req, res) => {
    fs.readFile(`${req.params.model}.json`, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.json(JSON.parse(data));
    });
})

const port = process.env.PORT || 3001;
server.listen(port, () =>
    console.log(`Your routes will be running on http://localhost:${port}`)
);