var express = require('express');
var router = express.Router();
const data_nilai = require('../controller/data_nilai.js');

/* GET home page. */
router.post('/', data_nilai.get_data_nilai)


module.exports = router;
