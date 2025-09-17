const mongoose=require("mongoose");

const address=new mongoose.Schema({
    state:{type:String,required:true},
    distict:{type:String, required:true},
    pin:{type:Number,required:true},
    mobile:{type:Number,required:true}
})
const resturentSchema=new mongoose.Schema({
    name:{type:String, required:true,unique:true},
    cuisin:{type:String, required:true,enum:["Indian","Italian","Mexican","Chinese","Other"]},
    address:[address]
})

const resturentModel=mongoose.model("resturentCollection",resturentSchema);

module.exports=resturentModel;