const express = require("express")
const connectDB = require("./config/db")
const port = 5000
//allows access to var env from the entire project
const dotenv = require("dotenv").config()

//DB connexion
connectDB()


const app = express()

//middleware for request data treatment
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use("/post", require("./routes/post.routes"))

//launch server
app.listen(port, () => console.log(("Server tourne au port " + port)))