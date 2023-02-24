module.exports=(app)=>{
    const UserController=require("../controllers/UserController")

    app.get("/users",UserController.allusers)
    app.post("/adduser",UserController.adduser)

    app.post("/updateuser",UserController.updateuser)
}