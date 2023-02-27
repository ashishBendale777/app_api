const express = require("express")
const mongoose = require("mongoose")
const bodyparser=require("body-parser")

//creating app
const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))


//connecting to database
mongoose.connect("mongodb://127.0.0.1:27017/mydb", {
    useNewUrlParser: true
}).then((result) => {
    console.log("Database Connected")
}).catch((err) => {
    console.log("Not Connected")
});


app.get("/", (req, res) => {
    res.send("Hi...")
})

app.get("/getuser", (req, res) => {
    res.send("Users")
})


require("./routes/UserRoutes")(app)
require("./routes/EmployeeEouyes")(app)
require("./routes/PersonRoutes")(app)

require("./routes/CustRoutes")(app)
require("./routes/OrderRoutes")(app)

app.listen(5000, () => {
    console.log("Server Started")
})
