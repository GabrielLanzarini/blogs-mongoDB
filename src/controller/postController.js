const { Router } = require("express")
const { findPosts, deletePost, addPost } = require("../service/postService")
const jwtVerify = require("../middleware/jwtVerify")
const post_router = Router()

post_router.post("/create/post/:blogId", jwtVerify, async (req, res) => {
    const { blogId } = req.params
    const { title, desc } = req.body
    try {
        await addPost(blogId, title, desc)
        res.status(204).json({ message: "New post created" })
    } catch (err) {
        res.status(err.statusCode || 404).json({ message: err.message || "Internal server error" })
    }
})
post_router.delete("/delete/post/:postId/:blogId", jwtVerify, async (req, res) => {
    const { postId, blogId, userId } = req.params
    try {
        await deletePost(userId, blogId, postId)
        res.status(204).json({ message: "Post deleted" })
    } catch (err) {
        res.status(404).json({ message: "Internal server Error" })
    }
})

post_router.get("/find/posts/:userIdPost/:blogId", async (req, res) => {
    const { userIdPost, blogId } = req.params
    try {
        const posts = await findPosts(userIdPost, blogId)
        res.status(200).json({ posts })
    } catch (err) {
        res.status(err.statusCode || 404).json({ message: err.message || "Internal server Error" })
    }
})

module.exports = post_router
