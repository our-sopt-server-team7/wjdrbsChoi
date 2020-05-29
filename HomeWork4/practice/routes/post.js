const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');

router.post('/write', async (req, res) => {
    const {
        id,
        author,
        title,
        content  
    } = req.body;

    var now = moment();
    const dateTime = await now.format('YYYY-MM-DD');

    if (!author || !title || !content) {
        res.status(statusCode.BAD.REQUEST)
            .send(util.fail(statusCode.BAD.REQUEST, resMessage.OUT_OF_VALUE))
                
        return;
    }

    const idx = await Post.write(author, title, content, dateTime);

    res.status(statusCode.OK)
        .send(utl.success(statusCode.OK, resMessage.POST_SUCCESS_Write, idx));

});

module.exports = router;
