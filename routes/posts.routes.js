

const express = require("express");
const Posts = require("../models/Posts.model")

const postsRouter = express.Router();


postsRouter.get("/posts", async(req, res)=>{
    const posts = await Posts.find({});
    res.send(posts);
})

//Device Name  MOBILE
postsRouter.get("/posts?device=MOBILE",async(req,res) =>{
    const posts = await Posts.find({device:"MOBILE"})
    res.send(posts);
})

// Devices Name Mobile && PC

postsRouter.get("/posts?device1=MOBILE&device2=PC", async(req, res)=>{
    const posts = await Posts.find({device1:"MOBILE", device2:"PC"});
    res.send(posts);
})

postsRouter.get("/:userId",async(req,res) =>{
    const userId = req.params.userId
    const posts = await Posts.find({userId})
    res.send(posts)
})
module.exports = {postsRouter}
//Update the Posts using Patch Endpoint

