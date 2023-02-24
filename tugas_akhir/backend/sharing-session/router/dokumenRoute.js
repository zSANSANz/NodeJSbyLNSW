const router = require('express').Router()
const controller = require('../controller/dokumenController')

router.get('/', controller.getDokumen)

module.exports = router