const router = require('express').Router()
const pegawai = require('./pegawaiRoute')

router.use('/pegawai', pegawai)

module.exports = router