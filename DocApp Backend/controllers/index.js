
var express = require('express')
const router = express.Router()



router.use('/patients', require('./patientController'))

 
module.exports = router;
