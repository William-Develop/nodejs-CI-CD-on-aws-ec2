const moment = require("moment");
const date = moment().format("LL");
const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send(`Hello CI / CD Demo - ${date} Version 1.0 - Message: ✨Success✨!`)
})

app.listen(port,() => {
    console.log(`✨ Server listening on http://localhost:${port} ✨`)
})