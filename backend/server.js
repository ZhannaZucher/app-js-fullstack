const express = require("express")
const connectDB = require("./config/db")
const port = 5000
//allows access to var env from the entire project
const dotenv = require("dotenv").config()
const cors = require("cors")

//DB connexion
connectDB()

const app = express()

//CORS Authorization
app.use(cors({
	origin: "http://localhost:5173",
	credentials: true,
	optionsSuccessStatus: 200
}))

//middleware for request data treatment
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use("/post", require("./routes/post.routes"))

//launch server
app.listen(port, () => console.log(("Server tourne au port " + port)))