const express = require("express")
const route = require("./route")
const cookieParser = require("cookie-parser")
require("dotenv").config()
const app = express()

app.use(cookieParser())
app.use(express.json())
app.use("/api/v1/", route)

app.listen(3000, () => {
    console.log("Listening on 3000")
})
