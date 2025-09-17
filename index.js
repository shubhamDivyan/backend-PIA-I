const express=require("express");
const ConnectMongosDB = require("./config/db.config");
const resturentRoute=require("./routes/resturent.routes");
const notFound=require("./middleware/notFound.middleware");
const app=express();

app.use(express.json());
ConnectMongosDB()

app.use("/api",resturentRoute)
app.use(notFound);




app.listen(8080,()=>{
    console.log("Server is Running on port 8080");
})