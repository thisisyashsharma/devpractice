const express = require("express");
const { getUser, getLogin, getProfile } = require("./controllers/user.controller");
const app = express();

app.use(express.json()); 

app.get("/",  getUser );

app.post("/login", getLogin);

app.get("/profile", getProfile);
app.listen(4000, () => {
    console.log("http://localhost:4000/")
})