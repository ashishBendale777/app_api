const mongoose = require("mongoose")

const CustomerSchema = mongoose.Schema({
    CustName: String,
    CustMobNo: String,
    CustAddress: String,
    CustCity: String
})

module.exports=mongoose.model("Customer",CustomerSchema)