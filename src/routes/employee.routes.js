import express from 'express'
const router=express.Router()
import { createEmployee,getEmployee } from '../controller/employee.controller.js'


router.get('/',getEmployee)
router.post('/add',createEmployee)

export default router;