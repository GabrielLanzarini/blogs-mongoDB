const { Router } = require("express")
const express = require("express")
const user_router = require("./controller/userController")
const app = express()

const route = Router()

route.use("/user", user_router)

module.exports = route
