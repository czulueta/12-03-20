const express = require("express")
const app = express()
const { v4: uuidv4 } = require("uuid")

app.use(express.json())


app.listen(9000, () => {
    console.log("Serving is up and running on port 9000!!!")
})