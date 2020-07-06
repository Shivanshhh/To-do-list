const express = require('express');
const mongoose=require('mongoose');
const router = express.Router();
const List = require('../models/schema');
items=[];

router.get("/", async (req, res) => {
    var d= await List.find({});
    res.render("display", {items:d});
});
router.post('/', async (req,res) =>{
    const newDoc= await List.create(req.body);
    console.log("DB Working");
    res.redirect("/");
});
router.post("/delete", async (req,res)=>{
    var j = req.body.itemm;
    await List.findByIdAndDelete(j);
    res.redirect('/');
});
router.post("/update", async (req,res)=>{
    var d = req.body.itemm1;
    await List.findByIdAndUpdate(d, {text:req.body.newtext});
    res.redirect('/');
});

module.exports=router;





