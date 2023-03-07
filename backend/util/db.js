const { DATABASE_URL } = require("./config")
const mongoose = require("mongoose")

const connectToDatabase = async () => {
  mongoose
    .connect(DATABASE_URL)
    .then(() => {
      console.log("connected to MongoDB")
    })
    .catch((error) => {
      console.log("error connection to MongoDB:", error.message)
    })

  return null
}

module.exports = {
  connectToDatabase,
}
