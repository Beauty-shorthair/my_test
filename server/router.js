let express = require('express')
let router = express.Router()
let brand = require('./api/brand')

router.get('/brand', brand.get)

module.exports = router