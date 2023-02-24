const router = require('express').Router()

const pegawai = require('./pegawaiRoute')
const dokumen = require('./dokumenRoute')

router.use('/pegawai', pegawai)
router.use('/dokumen', dokumen)

module.exports = router