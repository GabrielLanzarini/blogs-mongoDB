const { ObjectId } = require("mongodb")
const collectionBlog = require("../dbConnection")
const { genSalt, hash, compare } = require("bcrypt")
const CustomError = require("../helper/CustomError")
const { sign } = require("jsonwebtoken")

const collection = collectionBlog()

const insertNewUser = async (first_name, last_name, username, password) => {
    const usernameFind = await collection.findOne({ username: username })
    const hashSalt = await genSalt(12)
    const hashPass = await hash(password, hashSalt)
    if (usernameFind) throw new CustomError("The user already exists", 409)
    await collection.insertOne({ first_name: first_name, last_name: last_name, username: username, password: hashPass, blogs: [] })
}

const findUser = async (id) => {
    const documents = await collection.findOne({ _id: new ObjectId(id) })
    const user = {
        last_name: documents.last_name,
        first_name: documents.first_name,
        username: documents.username,
        blogs: [...documents.blogs],
    }
    return user
}

const findAllUsers = async () => {
    const documents = await collection.find({}).toArray()
    return documents
}

const loginUser = async (username, password) => {
    const user = await collection.findOne({ username: username })
    if (!user) throw new CustomError("User Not Found", 404)
    const passCompare = await compare(password, user.password)
    if (!passCompare) throw new CustomError("Incorrect Password", 401)
    return sign({ userId: user._id }, process.env.SECRET, { expiresIn: 80000 })
}

const deleteUser = async (id) => {
    await collection.deleteOne({ _id: new ObjectId(id) })
}

module.exports = { insertNewUser, findUser, deleteUser, findAllUsers, loginUser }
