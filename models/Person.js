const mongoose = require("mongoose")

const PersonSchema = mongoose.Schema({
    Name: { type: String, required: [true, "Name Required"] },
    Age: { type: Number, min: [18, "Age Must above 18"], max: [50, "Age Must below 50"] },
    Gender: { type: String, enum: ["Male", "Female"] }
})

module.exports = mongoose.model("Person", PersonSchema)