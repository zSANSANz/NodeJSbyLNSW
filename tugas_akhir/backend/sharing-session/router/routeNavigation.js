const router = require('express').Router()

const dokumen = require('./dokumenRoute')
const employee = require('./employeeRoute')

router.use('/dokumen', dokumen)
router.use('/employee', employee)

module.exports = router