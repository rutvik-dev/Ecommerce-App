var express = require('express');
var router = express.Router();
let CONTROL = require('../controller/ORDER1')

/*CREATE ORDER*/
router.post('/CreateOrder',CONTROL.CreateOrder);

/*GET ALL ORDER*/
router.get('/GetAllOrder',CONTROL.GerAllOrder);



module.exports = router;