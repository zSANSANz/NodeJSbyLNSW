const router = require('express').Router()

const pegawai = require('./pegawaiRoute')
const dokumen = require('./dokumenRoute')
const employee = require('./employeeRoute')

router.use('/pegawai', pegawai)
router.use('/dokumen', dokumen)
router.use('/employee', employee)

module.exports = router