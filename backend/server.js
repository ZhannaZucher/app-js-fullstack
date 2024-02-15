const express = require("express")
const port = 5000

const app = express()

//middleware for request data treatment
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use("/post", require("./routes/post.routes"))

//launch server
app.listen(port, () => console.log(("Server tourne au port " + port)))