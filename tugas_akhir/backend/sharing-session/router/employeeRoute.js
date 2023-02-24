const router = require('express').Router()
const controller = require('../controller/employeeController')

router.get('/', controller.getAllEmployee)
router.get('/:nik', controller.getEmployeeByNik)
router.post('/', controller.postEmployee)
router.put('/:nik', controller.updateEmployee)
router.delete('/:nik', controller.deleteEmployee)

module.exports = router