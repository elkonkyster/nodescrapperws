const { Router, response } = require('express')
const {getMultasJal} = require('../controllers/multasjal.controller')
const router = Router()

router.post('/:placa/:serie',getMultasJal)

module.exports = router;