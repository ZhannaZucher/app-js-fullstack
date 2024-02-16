const express = require("express")
const { getPosts, createPost, editPost, deletePost, likePost, dislikePost } = require("../controllers/post.controller")
const router = express.Router()

router.get("/", getPosts)

router.post("/", createPost)

router.put("/:id", editPost)

router.delete("/:id", deletePost)

router.patch("/like-post/:id", likePost)

router.patch("/dislike-post/:id", dislikePost)

module.exports = router