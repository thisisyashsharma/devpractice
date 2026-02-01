const express = require("express");
const { getUser } = require("./controllers/user.controller");
const app = express();


app.get("/",  getUser );

app.listen(4000, () => {
    console.log("http://localhost:4000/")
})