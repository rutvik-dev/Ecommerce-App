var express = require('express');
var router = express.Router();
let CONTROL = require('../controller/PRODUCT1')

/*CREATE PRODUCT*/
router.post('/CreateProduct',CONTROL.CreateProduct);

/*GET ALL PRODUCT*/
router.get('/GetAllProduct',CONTROL.GetAllProduct);



module.exports = router;