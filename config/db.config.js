const mongoose=require("mongoose")


const ConnectMongosDB=async()=>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/Cuisine");
        console.log("DB is connect");
    } catch (error) {
        console.log("Something is Wrong")
        console.log(error);
    }
}

module.exports=ConnectMongosDB;