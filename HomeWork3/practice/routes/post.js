var express = require('express');
var router = express.Router();
const PostModel  = require('../models/post');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');


// Level3 게시글 CRUD


// 게시글 전부 조회
router.get('/', function (req, res, next) {
    res.status(statusCode.OK)
    .send(util.success(statusCode.OK, resMessage.POST_SUCCESS, PostModel));
});


// 게시글 아이디로 조회

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const post = PostModel.filter(post => post.id == id)[0];

  if (post === undefined) {
    res.status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.No_POST));
    return
  }
    const dto = {
        id : post.id,
        writer : post.writer,
        content : post.content,
        title : post.title,
        date : post.date
      }
    
      res.status(statusCode.OK)
          .send(util.success(statusCode.OK, resMessage.READ_POST_SUCCESS, dto))
    }
  
)

module.exports = router;

