module.exports = (app) => {
    const EmpController=require("../controllers/EmployeeController")

    app.get("/allemps",EmpController.allemp)
    app.post("/addemp",EmpController.addemp)
    app.get("/empbydept/:deptname",EmpController.empByDept)
    app.get("/empbysalary",EmpController.empBySalary)

    app.post("/empbydept",EmpController.empByDeptPost)
    
    app.delete("/deleteemp",EmpController.deleteEmployee)
    
}