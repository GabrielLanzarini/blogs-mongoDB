const { ObjectId } = require("mongodb")
const collectionBlog = require("../dbConnection")
const { findUser } = require("./userService")
const CustomError = require("../helper/CustomError")

const collection = collectionBlog()

const addBlog = async (name, userId) => {
    const blogWithId = { _id: new ObjectId(), name: name, postagens: [] }
    await collection.findOneAndUpdate({ _id: new ObjectId(userId) }, { $push: { blogs: blogWithId } })
}

const deleteBlog = async (userId, blogId) => {
    const blogs = await collection.findOneAndUpdate(
        {  _id: new ObjectId(userId) } },
        { $pull: { blogs: { _id: new ObjectId(blogId) } } },
        { returnDocument: false }
    )
    console.log(blogs)
    console.log(blogs.value)
    if (!blogs) throw new CustomError("Blog not found", 404)
    // const index = blogs.findIndex((e) => e._id == blogId)
    // if (index >= 0) blogs.splice(index, 1)
    // await collection.updateOne({ "blogs._id": new ObjectId(blogId) }, { $set: { blogs: blogs } })
}

const findBlog = async (userId) => await collection.findOne({ _id: new ObjectId(userId) }, { projection: { blogs: 1 } })

const findAllBlogs = async () => await collection.find({ blogs: { $exists: true, $ne: [] } }, { projection: { blogs: 1, _id: 0 } }).toArray()

module.exports = { findBlog, addBlog, deleteBlog, findAllBlogs }
