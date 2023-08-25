const { Router } = require("express")
const express = require("express")
const { insertNewUser, deleteUser, findUser } = require("../service/userService")
const app = express()

const user_router = Router()

user_router.post("/create", async (req, res) => {
    const { name, password } = req.body
    try {
        await insertNewUser(name, password)
    } catch (err) {
        console.log(err)
    }
    res.status(204).json({ message: "New user created" })
})

user_router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params
    try {
        await deleteUser(id)
    } catch (err) {
        console.log(err)
    }
    res.status(204).json({ message: "User deleted" })
})

user_router.get("/user/:id", async (req, res) => {
    const { id } = req.params
    try {
        const user = await findUser(id)
    } catch (err) {
        console.log(err)
    }
    res.status(204).json({ user: user })
})

module.exports = user_router
