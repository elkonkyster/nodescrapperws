const { Router, response } = require('express')
const {getMultasJal} = require('../controllers/multasjal.controller')
const router = Router()

router.post('/',getMultasJal)

module.exports = router;