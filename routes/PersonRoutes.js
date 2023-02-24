module.exports=(app)=>{
    const PersonController=require("../controllers/PersonController")

    app.post("/addperson",PersonController.addPerson)
}