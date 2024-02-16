const PostModel = require("../models/post.model")

module.exports.getPosts = async (req, res) => {
	const posts = await PostModel.find()
	res.status(200).json(posts)
	if(err) {
		res.status(400).json({error})
	}
}

module.exports.createPost = async (req, res) => {
	if (!req.body.message) {
		res.status(400).json({message: "Bad Request"})
	}

	const post = await PostModel.create({
		message: req.body.message,
		author: req.body.author
	})
	res.status(201).json({message: "Post created"})
}

module.exports.editPost = async (req, res) => {
	const post = await PostModel.findById(req.params.id)

	if (!post) {
		res.status(404).json({message: "Not Found"})
	}
	const updatePost = await PostModel.findByIdAndUpdate(
		post, 
		req.body,
		{new:true}
		)
	res.status(200).json(updatePost)
}

module.exports.deletePost = async (req, res) => {
	const post = await PostModel.findById(req.params.id)
	if (!post) {
		res.status(404).json({message: "Not Found"})
	}
	await post.deleteOne()
	res.status(200).json({message: "Post deleted"})
}