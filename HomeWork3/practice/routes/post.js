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


// 게시글 번호로 조회

router.get('/:idx', async(req, res) => {
  const idx = req.params.idx;
  const dto  = await Post.findOne(idx);

  // 해당 게시글이 존재하지 않을 때
  if (dto.length === 0) {
    return res.status(statusCode.BAD_REQUEST)
        .send(util.success(statusCode.BAD_REQUEST, resMessage.BAD_POSTIdx, dto));
  }

  // 해당 게시글이 존재할 때
  res.status(statusCode.OK)
      .send(util.success(statusCode.OK, resMessage.READ_POST_SUCCESS, dto));
});


// 게시글 작성

router.post('/write', async(req, res) => {
  const {author,title,content} = req.body;

  // 게시글 작성시간 
  var now = moment();
  const dateTime = await now.format('YYYY-MM-DD');

  // 파라미터가 부족할 때 에러
  if (!author || !title || !content) {
    res.status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, resMessage.OUT_OF_VALUE));

    return;
  }

  // 게시글 정상 작성
  const idx = await Post.write(author, title, content, dateTime);

  res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.POST_SUCCESS_Write, idx));
  
});

router.put('/:idx', async (req, res) => {
  const idx = req.params.idx;
  const {
      author,
      title,
      content
  } = req.body;


  if (!idx) {
      res.status(statusCode.BAD_REQUEST)
          .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
      return;
  }
  const dao = {author: author, title: title, content: content};
  const post = await Post.update(idx, dao);

  if (!post) {
      return res.status(statusCode.DB_ERROR)
          .send(util.success(statusCode.DB_ERROR, resMessage.UPDATE_FAIL));
  }
  res.status(statusCode.OK)
      .send(util.success(statusCode.OK, resMessage.UPDATE_SUCCESS, post));
});


module.exports = router;

