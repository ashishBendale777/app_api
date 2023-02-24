const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    FirstName: String,
    LastName: String,
    Age: Number
})

module.exports = mongoose.model("User", UserSchema)