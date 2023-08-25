const { Router } = require("express")
const express = require("express")
const { insertNewUser, deleteUser, findUser, loginUser } = require("../service/userService")
const jwtVerify = require("../middleware/jwtVerify")

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

user_router.post("/login", async (req, res) => {
    const { name, password } = req.body
    try {
        const token = await loginUser(name, password)
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
        console.log(err)
    }
})

user_router.get("/find", jwtVerify, async (req, res) => {
    const { userId } = req.params
    try {
        const user = await findUser(userId)
        res.status(200).json({ user: user })
    } catch (err) {
        console.log(err)
    }
})

module.exports = user_router
