const { ObjectId } = require("mongodb")
const collectionBlog = require("../dbConnection")
const CustomError = require("../helper/CustomError")
const { findBlogs } = require("./blogService")

const collection = collectionBlog()

const findPosts = async (userId, blogId) => {
    const blogs = await findBlogs(userId)
    const postagens = blogs.filter((e) => e._id == blogId)
    if (postagens.length == 0) throw new CustomError("Posts not found", 404)
    return postagens[0].postagens
}

const findAllPosts = async () => await collection.find({ blogs: { $exists: true, $ne: [] } }, { projection: { username: 1, blogs: 1 } }).toArray()

const addPost = async (blogId, title, desc) => {
    const newPost = { _id: new ObjectId(), title: title, desc: desc }
    try {
        await collection.findOneAndUpdate({ "blogs._id": new ObjectId(blogId) }, { $push: { "blogs.$.postagens": newPost } })
    } catch (error) {
        throw new CustomError("Blog not found", 404)
    }
}

const deletePost = async (userId, blogId, postId) => {
    const posts = await findPosts(userId, blogId)
    const index = posts.findIndex((e) => e._id == postId)
    if (index >= 0) posts.splice(index, 1)
    await collection.updateOne({ "blogs._id": new ObjectId(blogId) }, { $set: { "blogs.$.postagens": posts } })
}

module.exports = { findPosts, addPost, deletePost, findAllPosts }
