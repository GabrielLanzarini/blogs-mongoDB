const { collectionBlog } = require("../dbConnection")

export const insertNewUser = async (name, password) => {
    const collection = collectionBlog()
    await collection.insertOne({ name: name, password: password, blogs: [] })
}

export const findUser = async (id) => {
    const collection = collectionBlog()
    const documents = await collection.findOne({ _id: id })
    return documents
}

// const updatePasswordUser = async (id) => {
//     const collection = collectionBlog()
//     const documents = await collection.findOne({ _id: id })
//     return documents
// }

export const deleteUser = async (id) => {
    const collection = collectionBlog()
    await collection.deleteOne({ _id: id })
}
