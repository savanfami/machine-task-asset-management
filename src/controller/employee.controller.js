import EmployeeModel from "../model/employee.model.js";

export const getEmployee = async (req, res) => {
  try {
    const employeeInfo = await EmployeeModel.findAll();
    res.render("employees/list", { employeeInfo });
  } catch (error) {
    console.log(error);
  }
};

export const createEmployee = async (req, res) => {
  try {
    const employeeData = {
      ...req.body,
      status: req.body.status === "true",
    };
    await EmployeeModel.create(employeeData);
    return res.redirect("/employees");
  } catch (error) {
    console.log(error);
  }
};

export const showEditPage = async (req, res) => {
  try {
    const employee = await EmployeeModel.findByPk(req.params.id);
    if (!employee) {
      return res.status(404).send("employee not found");
    }
    res.render("employees/edit", { employee });
  } catch (error) {
    console.log(error);
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const employeeData = {
      ...req.body,
      status: req.body.status === "true",
    };
    await EmployeeModel.update(employeeData, {
      where: { id: req.params.id },
    });
    return res.redirect("/employees");
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    await EmployeeModel.destroy({
      where: { id: req.params.id },
    });
    return res.redirect("/employees");
  } catch (error) {
    console.log(error);
  }
};
