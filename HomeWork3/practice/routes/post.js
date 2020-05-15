var express = require('express');
var router = express.Router();
let Post  = require('../models/post');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');
// npm install moment 후에 사용
var moment = require('moment');       



// Level3 게시글 CRUD (서버 파트장님 코드 참고!!)


// 게시글 전부 조회
router.get('/', async (req, res) => {
  const dto = await Post.findAll();
  res.status(statusCode.OK)
      .send(util.success(statusCode.OK, resMessage.POST_SUCCESS, dto));
});

module.exports = router;

