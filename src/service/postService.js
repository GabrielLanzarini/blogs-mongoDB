const { ObjectId } = require("mongodb")
const collectionBlog = require("../dbConnection")
const CustomError = require("../helper/CustomError")

const findPosts = async (userId, blogId) => {
    const blogs = await findBlogs(userId)
    const postagens = blogs.filter((e) => e._id == blogId)
    return postagens[0].postagens
}
const addPost = async (blogId, title, desc) => {
    const collection = collectionBlog()
    const newPost = { _id: new ObjectId(), title: title, desc: desc }
    try {
        await collection.updateOne({ "blogs._id": new ObjectId(blogId) }, { $push: { "blogs.$.postagens": newPost } })
    } catch (error) {
        throw new CustomError("Internal Server Error", 404)
    }
}

const deletePost = async (userId, blogId, postId) => {
    const collection = collectionBlog()
    const posts = await findPosts(userId, blogId)
    const index = posts.findIndex((e) => e._id == postId)
    if (index >= 0) posts.splice(index, 1)
    await collection.updateOne({ "blogs._id": new ObjectId(blogId) }, { $set: { "blogs.$.postagens": posts } })
}

module.exports = { findPosts, addPost, deletePost }
