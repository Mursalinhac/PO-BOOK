const express = require("express");
const server = express();

server.get("/health", (req, res) => {
    res.send({"message": "This is PO Book"})
})

server.get("/pricelist/:model", (req, res) => {
    res.send(req.params)
})

const port = process.env.PORT || 3001;
server.listen(port, () =>
    console.log(`Your routes will be running on http://localhost:${port}`)
);