
module.exports = (app) => {
    const ProdController=require("../controllers/ProdController")

    app.post("/addprod",ProdController.addproduct)
    app.get("/allprod",ProdController.allprod)
}