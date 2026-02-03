 

 const express = require("express"); 
 const app = express(); 

 const authRoutes = require("./routers/auth.routes")
 const userRoutes = require("./routers/user.routes")


 app.use(express.json()); 
 app.use("/auth", authRoutes ); 
 app.use("/", userRoutes); 


 app.listen(4000, ()=>{
    console.log("Server is running  at ✅ http://localhost:4000");
 })