const router = require('express').Router()
const controller = require('../controller/pegawaiController')

router.get('/', controller.getAllPegawai)
router.get('/:nip', controller.getPegawaiByNip)
router.post('/', controller.postPegawai)
router.put('/:nip', controller.updatePegawai)
router.delete('/:nip', controller.deletePegawai)

module.exports = router