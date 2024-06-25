var express = require('express');
var router = express.Router();
let CONTROL = require('../controller/CATEGORY1')

/*CREATE CATEGORY*/
router.post('/CreateCategory',CONTROL.CreateCategroy);

/*GET ALL CATEGORY*/
router.get('/GetAllCategory',CONTROL.GetAllCategroy);

module.exports = router;