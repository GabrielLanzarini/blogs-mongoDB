const { Router } = require("express")
const express = require("express")
const user_router = require("./controller/userController")
const blog_router = require("./controller/blogController")
const post_router = require("./controller/postController")
const app = express()

const route = Router()

route.use("/user", user_router)
route.use("/blog", blog_router)
route.use("/post", post_router)

module.exports = route
