const { collectionBlog } = require("../dbConnection")

const findBlog = async (name, blog) => {
    const user = await findUser(name)
    const blogFind = user.blogs.find((e) => e.name == blog)
    console.log(blogFind)
}

const findPost = async () => {
    const collection = collectionBlog()
    const documents = await collection.find({}).toArray()
    console.log(documents)
}

const addBlog = async (name, blog) => {
    const collection = collectionBlog()
    const blogWithId = { id: new ObjectId(), ...blog }
    await collection.updateOne({ name: name }, { $push: { blogs: blogWithId } })
}

const addPost = async (blog, post) => {
    const collection = collectionBlog()
    const postWithId = { id: new ObjectId(), ...post }
    await collection.updateOne({ "blogs.name": blog }, { $push: { "blogs.$.postagens": postWithId } })
}
const deletePost = async (name) => {
    const collection = collectionBlog()
    await collection.deleteOne({ name: name })
}
