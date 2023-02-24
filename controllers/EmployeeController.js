const Employee = require("../models/Employee")

exports.addemp = (req, res) => {
    const emp = new Employee({
        EmpName: req.body.empname,
        EmpDept: req.body.empdept,
        EmpSalary: Number(req.body.empsalary)
    })

    emp.save()
        .then((insEmp) => {
            res.status(200).json(insEmp)
        }).catch((err) => {
            res.status(500).send(err)
        });
}

exports.allemp = (req, res) => {
    Employee.find()
        .then((empdata) => {
            res.status(200).json(empdata)
        }).catch((err) => {
            res.status(500).send(err)
        });
}

exports.empByDept = (req, res) => {
    const dept = req.params.deptname

    Employee
        .where('EmpDept')
        .equals(dept)
        .then((empRes) => {
            res.status(200).json(empRes)
        }).catch((err) => {
            res.status(500).send(err)
        });

}


exports.empByDeptPost = (req, res) => {
    const dept = req.body.deptname

    Employee
        .where('EmpDept')
        .equals(dept)
        .then((empRes) => {
            res.status(200).json(empRes)
        }).catch((err) => {
            res.status(500).send(err)
        });

}

exports.empBySalary = (req, res) => {
    Employee
        .where("EmpSalary")
        .gte(40000)
        .lte(50000)
        .then((empData) => {
            res.status(200).json(empData)
        }).catch((err) => {
            res.status(500).send(err)
        });
}

exports.deleteEmployee = (req, res) => {
    Employee.findByIdAndDelete(req.body.id)
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}