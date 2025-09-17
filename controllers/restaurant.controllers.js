const resturent=require("../models/restaurant.model");

exports.addResturent=async(req,res)=>{
    try{
        const addRes=await resturent.create(req.body);
        res.status(201).json({msg:"Resturent Updated",addRes});
    }catch(error){
        res.status(500).json({msg:"Something is wrong Resturent not updated"});
    }
}

exports.getAllResturent=async(req,res)=>{
    try {
        const restu=await resturent.find();
        res.status(200).json({msg:"all Data",restu});
    } catch (error) {
        res.status(404).json({msg:"Something is worng can't get all data",error});
    }
}

exports.getAllResturentById=async(req,res)=>{
    try {
        const restau=await resturent.findById(req.params.id);
        if(!restau){
          return  res.status(404).json({msg:"Resturent Not Found"});
        }
     res.status(200).json({msg:"Resturent Found",restau})
    } catch (error) {
        res.status(404).json({msg:"something is wrong",error});
    }
}

exports.getResturentByName=async(req,res)=>{
    try {
        const ResByName=await resturent.find({name:req.params.name});
        if(ResByName.length===0){
          return  res.status(404).json({msg:"Resturent Not Found"});
        }           
            res.status(200).json({msg:"ResByName"});

    } catch (error) {
        res.status(500).json({msg:"something Wrong in Server"});
    }
}

exports.updateRes=async(req,res)=>{
    try {
        const restupdate=await resturent.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!restupdate){
          return  res.status(404).json({message:"Resturent Not Found"});
        }
            res.status(200).json({msg:"Resturent updated",restupdate})
    } catch (error) {
        res.status(400).json({msg:"something wrong in update"});
    }
}

exports.deleteResturent=async(req,res)=>{
    try{
        const deleterest=await resturent.findByIdAndDelete(req.params.id);
        if(!deleterest){
          return  res.status(404).json({msg:"User Not deleted"});
        }
            res.status(200).json({msg:"User Deleted"});
    }catch(error){
        res.status(400).json({msg:"something Wrong"})
    }
}