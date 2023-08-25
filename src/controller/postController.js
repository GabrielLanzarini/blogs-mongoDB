const { Router } = require("express")
const { findPosts, deletePost, addPost } = require("../service/blogService")
const jwtVerify = require("../middleware/jwtVerify")
const post_router = Router()

post_router.post("/create/post/:blogId", jwtVerify, async (req, res) => {
    const { blogId } = req.params
    const { title, desc } = req.body
    try {
        await addPost(blogId, title, desc)
        res.status(204).json({ message: "New post created" })
    } catch (err) {
        console.log(err)
    }
})
post_router.delete("/delete/post/:postId/:blogId", jwtVerify, async (req, res) => {
    const { postId, blogId, userId } = req.params
    try {
        await deletePost(userId, blogId, postId)
        res.status(204).json({ message: "Post deleted" })
    } catch (err) {
        console.log(err)
    }
})

post_router.get("/find/posts/:userId/:blogId", async (req, res) => {
    const { userId, blogId } = req.params
    try {
        const blog = await findPosts(userId, blogId)
        res.status(200).json({ blogs: "blog" })
    } catch (err) {
        console.log(err)
    }
})

module.exports = post_router
