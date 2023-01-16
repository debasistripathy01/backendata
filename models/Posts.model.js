const mongoose = require("mongoose")

const postsData = new mongoose.Schema({
    title:String,
    body:String,
    device:{type:String, required:true},
    
})
const Posts = mongoose.model("posts",postsData)
module.exports = {Posts};