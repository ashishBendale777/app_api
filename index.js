const express = require("express")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const multer = require("multer")
const path = require("path")

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


//file storage configuration
const imageStorage = multer.diskStorage({
    destination: "Image",
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        );
    },
});

//file upload configuration
const imageUpload = multer({
    storage: imageStorage,

    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg|jfif)$/)) {
            return cb(new Error("Please Upload a Image......"));
        }
        cb(undefined, true);
    },
});


//file upload post req
app.post(
    "/uploadimage",
    imageUpload.single("image"),
    (req, res) => {
        res
            .status(200)
            .json({ filepath: "/images/".concat(req.file.filename), uploaded: true });
    },
    (err, req, res, next) => {
        res.status(400).send({ error: err.message });
    }
);


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
require("./routes/ProdRoute")(app)

app.use("/images", express.static("Image"));

app.listen(5000, () => {
    console.log("Server Started")
})
