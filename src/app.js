const express = require("express")
const route = require("./route")
const app = express()

app.use("/api/1/", route)

app.listen(3000, () => {
    console.log("Listening on 3000")
})
