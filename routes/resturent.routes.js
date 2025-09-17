const express=require("express");
const router=express.Router();
const ResturentController=require("../controllers/restaurant.controllers");

router.post("/add-resturent",ResturentController.addResturent);
router.get("/",ResturentController.getAllResturent);
router.get("/id/:id",ResturentController.getAllResturentById);
router.get("/name/:name",ResturentController.getResturentByName);
router.patch("/:id",ResturentController.updateRes);
router.delete("/:id",ResturentController.deleteResturent);


module.exports=router;