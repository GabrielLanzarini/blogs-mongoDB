const { Router } = require("express")
const { insertNewUser, deleteUser, findUser, loginUser } = require("../service/userService")
const jwtVerify = require("../middleware/jwtVerify")

const user_router = Router()

user_router.post("/create", async (req, res) => {
    const { first_name, last_name, username, password } = req.body
    console.log(first_name, last_name, username, password)
    console.log(req.body)
    try {
        await insertNewUser(first_name, last_name, username, password)
        res.status(204).json({ message: "New user created" })
    } catch (err) {
        res.status(err.statusCode || 404).json({ message: err.message || "Internal server Error" })
    }
})

user_router.post("/login", async (req, res) => {
    const { username, password } = req.body
    console.log(username, password)
    try {
        const token = await loginUser(username, password)
        res.cookie("x-acess", token).status(200).json({ message: "Successful login" })
    } catch (err) {
        res.status(err.statusCode || 404).json({ message: err.message || "Internal Server Error" })
    }
})

user_router.delete("/delete", jwtVerify, async (req, res) => {
    const { userId } = req.params
    try {
        await deleteUser(userId)
        res.status(204).json({ message: "User deleted" })
    } catch (err) {
        res.status(404).json({ message: "Internal server Error" })
    }
})

user_router.get("/find", jwtVerify, async (req, res) => {
    const { userId } = req.params
    try {
        const user = await findUser(userId)
        res.status(200).json({ user })
    } catch (err) {
        res.status(404).json({ message: "Internal server Error" })
    }
})

module.exports = user_router
