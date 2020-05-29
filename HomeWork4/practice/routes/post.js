const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
var moment = require('moment');

// 4차세미나 Level3 과제

// 게시글 조회
router.get('/', async(req, res) => {
    const result = await Post.findAll();
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.POST_FIND_ALL, result));
});


// 게시글 쓰기
router.post('/write', async (req, res) => {
    const {
        author,
        title,
        content  
    } = req.body;

    var now = moment();
    const createdAt = await now.format('YYYY-MM-DD');

    if (!author || !title || !content) {
        res.status(statusCode.BAD.REQUEST)
            .send(util.fail(statusCode.BAD.REQUEST, resMessage.OUT_OF_VALUE))
                
        return;
    }

    const idx = await Post.write(author, title, content, createdAt);

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.POST_SUCCESS_WRITE, {
            postIdx: idx
        }));

});

// 게시글 수정

router.put('/:idx', async(req, res) => {
    const idx = req.params.idx;
    const {
        author,
        title,
        content
    } = req.body;

    // idx를 넘겨주지 않았을 때
    if (!idx) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        return;
    }

    // 넘겨준 idx가 존재하지 않는 게시글 번호인지 아닌지 체크
    const postCheck = await Post.postCheck(idx);

    if (postCheck == false) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.POST_NOT_FOUND));
        return;
    }

    // 수정한 시간으로 변경
    var now = moment();
    const createdAt = await now.format('YYYY-MM-DD');
    const dao = {author : author, title : title, content : content, createdAt : createdAt};
    const protocol = await Post.update(idx, dao);
    
    if (!protocol) {
        return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.UPDATE_FAIL));
    }

    res.status(statusCode.OK)
    .send(util.success(statusCode.OK, resMessage.UPDATE_SUCCESS, dao));

});

// 게시글 삭제

router.delete('/:idx', async(req, res) => {
    const idx = req.params.idx;
    if (!idx) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE))
        return;
    }

    // 넘겨준 idx가 존재하지 않는 게시글 번호인지 아닌지 체크
    const postCheck = await Post.postCheck(idx);

    if (postCheck == false) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.POST_NOT_FOUND));
        return;
    }

    const result = Post.delete(idx);

    if (!idx) {
        res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.DELETE_FAIL))
        return;
    }

    res.status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.OK, resMessage.DELETE_SUCCESS));

})


module.exports = router;
