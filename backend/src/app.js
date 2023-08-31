const express = require("express")
const route = require("./route")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config()
const app = express()

app.use(express.json())
app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
)
app.use(cookieParser())
app.use("/api/v1/", route)

app.listen(5000, () => {
    console.log("Listening on 5000")
})
