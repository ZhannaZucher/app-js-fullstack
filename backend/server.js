const express = require("express")
const port = 5000

const app = express()

app.use("/post", require("./routes/post.routes"))

//launch server
app.listen(port, () => console.log(("Server tourne au port " + port)))