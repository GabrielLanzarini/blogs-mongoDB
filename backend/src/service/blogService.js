const { ObjectId } = require("mongodb")
const collectionBlog = require("../dbConnection")
const { findUser } = require("./userService")

const collection = collectionBlog()

const findBlogs = async (userId) => {
    const user = await findUser(userId)
    return user.blogs
}

const findAllBlogs = async () => {
    const users = await collection.find().toArray()
    return users.map((a) => a.blogs)
}

const addBlog = async (name, userId) => {
    const blogWithId = { _id: new ObjectId(), name: name, postagens: [] }
    await collection.findOneAndUpdate({ _id: new ObjectId(userId) }, { $push: { blogs: blogWithId } })
}

const deleteBlog = async (userId, blogId) => {
    const blogs = await findBlogs(userId)
    const index = blogs.findIndex((e) => e._id == blogId)
    if (index >= 0) blogs.splice(index, 1)
    await collection.updateOne({ "blogs._id": new ObjectId(blogId) }, { $set: { blogs: blogs } })
}

module.exports = { findBlogs, addBlog, deleteBlog, findAllBlogs }
