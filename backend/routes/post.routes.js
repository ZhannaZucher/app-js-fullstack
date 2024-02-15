const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
	res.json({message: "voici les données"})
})

router.post("/", (req, res) => {
	console.log(req.body)
	res.json({message: req.body.message})
})

router.put("/:id", (req, res) => {
res.json({messageId: req.params.id})
})

router.delete("/:id", (req, res) => {
res.json({message: "Post deleted id:" + req.params.id})
})

router.patch("/like-post/:id", (req, res) => {
res.json({message: "Post liked id:" + req.params.id})
})

router.patch("/dislike-post/:id", (req, res) => {
res.json({message: "Post disliked id:" + req.params.id})
})

module.exports = router