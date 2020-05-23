var express = require('express');
var router = express.Router();
const User = require('../models/user');
const util = require('../modules/util');
const statusCOde = require('../modules/statusCode')
const resMessage = require('../modules/responseMessage');

router.post('/signup', async (req, res) => {
  const {id, name, password, email, phone} = req.body;
  
  // 회원가입 필수요소가 빠졌을 때
  if (!id || !name || !password || !email || !phone) {
    res.status(statusCOde.BAD_REQUEST)
        .send(util.fail(statusCOde.BAD_REQUEST, resMessage.NULL_VALUE))
    return;
  }

  if (await User.checkUser(id)) {
    res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.ALREADY_ID));
        return;
  }

  


})



module.exports = router;
