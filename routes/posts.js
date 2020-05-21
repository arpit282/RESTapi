const express = require('express');
const router = express.Router()
const Post = require("../model/Post")

// gets all the post
router.get("/", async(req,res) =>{
    try {
        const posts =  await Post.find()
        res.json(posts)

    } catch (error) {
        res.json({message : error})
    }
})

// creates a post
router.post("/", async (req,res) =>{
    console.log(req.body)
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try{
    const savedpost = await post.save()
    res.json(savedpost)
    }catch(err) {
        res.json({message : err})
    }
})

// get specific post
router.get("/:id", async(req,res) =>{
    try{
   const post = await Post.findById(req.params.id)
   res.json(post)
    }
    catch(err){
        res.json({message : err})
    }
})


// Delete
router.delete("/:id",async (req,res) =>{
    try {
        const del = await Post.remove({_id: req.params.id})
        res.json(del)
    } catch (error) {
        res.json({message:error})
    }
})

// Update 
router.patch("/:id" , async(req,res) =>{
    try {
        const Update = await Post.updateOne(
            {_id: req.params.id},
            {$set: {title:req.body.title}}
        )
        res.json(Update)
    } catch (error) {
        res.json({message: error})
    }
})







module.exports = router