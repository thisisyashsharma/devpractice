
const express = require("express");
const {getLogin, getProfile } = require("./controllers/user.controller");
const { authenticate } = require("./middlewares/auth.middleware");

const app  = express(); 

app.use(express.json());

app.post("/login", getLogin);
app.get("/profile", authenticate, getProfile); 

app.listen(5000, ()=>{
    console.log("Server is listening at http://localhost:5000")
})