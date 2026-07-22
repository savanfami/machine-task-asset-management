import EmployeeModel from "../model/employee.model.js";

const getEmployee = async(req, res)=> {
  try {
    const employee=await EmployeeModel.findAll()
    res.render('employeeslist',{employee})
    
  } catch (error) {
    console.log(error);
  }
};


const createEmployee=async(req,res)=>{
    try {
        await EmployeeModel.create(req.body)
        res.redirect('/employees');
    } catch (error) {
        console.log(error)
    }
}


export { createEmployee, getEmployee };