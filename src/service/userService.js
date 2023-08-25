const { ObjectId } = require("mongodb")
const collectionBlog = require("../dbConnection")
const CustomError = require("../helper/CustomError")
const { sign } = require("jsonwebtoken")

const collection = collectionBlog()

const insertNewUser = async (name, password) => {
    await collection.insertOne({ name: name, password: password, blogs: [] })
}

const findUser = async (id) => {
    const documents = await collection.findOne({ _id: new ObjectId(id) })
    return documents
}

const findAllUsers = async () => {
    const documents = await collection.find({}).toArray()
    return documents
}

const loginUser = async (name, password) => {
    const user = await collection.findOne({ name: name })
    if (!user) throw new CustomError("User Not Found", 404)
    if (user.password !== password) throw new CustomError("Incorrect Password", 401)
    return sign({ userId: user._id }, process.env.SECRET, { expiresIn: 80000 })
}

const deleteUser = async (id) => {
    await collection.deleteOne({ _id: new ObjectId(id) })
}

module.exports = { insertNewUser, findUser, deleteUser, findAllUsers, loginUser }
