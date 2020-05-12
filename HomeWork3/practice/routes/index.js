var express = require('express');
var router = express.Router();

router.use('/user', require('./user'));      // require 는 외부에 모듈을 가져옴
router.use('/post', require('./post'));

module.exports = router;
