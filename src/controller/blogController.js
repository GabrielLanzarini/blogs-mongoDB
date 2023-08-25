const { Router } = require("express")
const { addBlog, deleteBlog, findBlogs, findAllBlogs } = require("../service/blogService")
const jwtVerify = require("../middleware/jwtVerify")

const blog_router = Router()

blog_router.post("/create", jwtVerify, async (req, res) => {
    const { userId } = req.params
    const { title } = req.body
    try {
        await addBlog(title, userId)
    } catch (err) {
        console.log(err)
    }
    res.status(204).json({ message: "New post created" })
})

blog_router.delete("/delete/:id", jwtVerify, async (req, res) => {
    const { id, userId } = req.params
    try {
        await deleteBlog(userId, id)
        res.status(204).json({ message: "Post deleted" })
    } catch (err) {
        console.log(err)
    }
})

blog_router.get("/find/:userId", async (req, res) => {
    const { userId } = req.params
    try {
        const blogs = await findBlogs(userId)
        res.status(200).json({ blogs: blogs })
    } catch (err) {
        console.log(err)
    }
})

blog_router.get("/findAll", async (req, res) => {
    try {
        const blogs = await findAllBlogs()
        res.status(200).json({ blogs: blogs })
    } catch (err) {
        console.log(err)
    }
})

module.exports = blog_router
