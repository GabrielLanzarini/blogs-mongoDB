const { Router } = require("express")
const { addBlog, deleteBlog, findBlog, findAllBlogs } = require("../service/blogService")
const jwtVerify = require("../middleware/jwtVerify")

const blog_router = Router()

blog_router.post("/create", jwtVerify, async (req, res) => {
    const { userId } = req.params
    const { title } = req.body
    try {
        await addBlog(title, userId)
        res.status(204).json({ message: "New post created" })
    } catch (err) {
        res.status(404).json({ message: "Internal server Error" })
    }
})

blog_router.delete("/delete/:id", jwtVerify, async (req, res) => {
    const { id, userId } = req.params
    try {
        await deleteBlog(userId, id)
        res.status(204).json({ message: "Post deleted" })
    } catch (err) {
        res.status(err.status || 404).json({ message: err.message || "Internal server Error" })
    }
})

blog_router.get("/find/:userId", async (req, res) => {
    const { userId } = req.params
    try {
        const blogs = await findBlog(userId)
        res.status(200).json(blogs)
    } catch (err) {
        res.status(404).json({ message: "Internal server Error" })
    }
})

blog_router.get("/findAll", async (req, res) => {
    try {
        const blogs = await findAllBlogs()
        res.status(200).json(blogs)
    } catch (err) {
        res.status(404).json({ message: "Internal server Error" })
    }
})

module.exports = blog_router
