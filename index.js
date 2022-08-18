const express = require("express");
const cors = require('cors')
const server = express();

server.use(cors())
const fs = require("fs");

server.get("/health", (req, res) => {
    res.send({"message": "This is PO Book"})
})

server.get("/pricelist/:model", (req, res) => {
    if (req.params.model === "stingray") {
        fs.readFile('stingray.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            res.json(JSON.parse(data));
        });
    }
    else {
        res.send(req.params.model);
    }
})

const port = process.env.PORT || 3001;
server.listen(port, () =>
    console.log(`Your routes will be running on http://localhost:${port}`)
);