import express from 'express'
import { validate } from '../middleware/validator.js'
const router=express.Router()
import { createEmployee,getEmployee } from '../controller/employee.controller.js'
import { employeeSchema } from '../validators/employee.validator.js'


router.get('/',getEmployee)
router.post('/add',validate(employeeSchema),createEmployee)

export default router;