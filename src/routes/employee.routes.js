import express from 'express'
import { validate } from '../middleware/validator.js'
const router=express.Router()
import { createEmployee,deleteEmployee,getEmployee, showEditPage, updateEmployee } from '../controller/employee.controller.js'
import { employeeSchema } from '../validators/employee.validator.js'


router.get('/',getEmployee)
router.get('/add', (req, res) => {
    res.render('employees/add');
});
router.post('/add',validate(employeeSchema),createEmployee)

router.get('/edit/:id', showEditPage);
router.post('/edit/:id', validate(employeeSchema),updateEmployee);

router.get('/delete/:id', deleteEmployee);

export default router;