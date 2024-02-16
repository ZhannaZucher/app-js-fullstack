const mongoose = require("mongoose")

const connectDB = async () => {
  mongoose.set("strictQuery", false)

  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => {
      console.error(err)
      process.exit()
    })
}

module.exports =  connectDB