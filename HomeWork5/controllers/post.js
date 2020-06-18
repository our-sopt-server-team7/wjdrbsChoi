const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
const PostModel = require('../models/post');
const jwt = require('../modules/jwt');
var moment = require('moment');

const post = {
    showAllPost : async(req, res) => {
        var result = await PostModel.showAllPost();

        res.status(statusCode.OK)
            .send(util.success(statusCode.OK, resMessage.POST_FIND_ALL, result));
    },

    searchPost : async(req, res) => {
        const postIdx = req.params.idx;
        
        if (await PostModel.checkPostId(postIdx) == false) {
            res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.POST_NOT_FOUND));
            return;
        }

        const result = await PostModel.searchPost(postIdx);
        res.status(statusCode.OK)
            .send(util.success(statusCode.OK, resMessage.POST_FIND_ONE, result));
    },
    
    createPost : async(req, res) => {
        const {author, title, content} = req.body;

        if (!author || !title || !content) {
            res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
            return;
        }

        var now = moment();
        const createdAt = await now.format('YYYY-MM-DD');

        var result = await PostModel.createPost(author, title, content, createdAt);

        res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.POST_SUCCESS_WRITE, result));

    },

    editPost : async(req, res) => {
        const {author, title, content} = req.body;
        const postIdx = req.params.postIdx;

        if (await PostModel.checkPostId(postIdx) == false) {
            res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.POST_NOT_FOUND));
            return;
        }


        var now = moment();
        const createAt = await now.format('YYYY-MM-DD');

        var result = await PostModel.editPost(postIdx, author, title, content, createAt);
        const dao = {author, title, content, createAt};

        res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.UPDATE_SUCCESS, dao));
    },

    deletePost : async(req, res) => {
        const postIdx = req.params.postIdx;
        
        if (await PostModel.checkPostId(postIdx) == false) {
            res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.POST_NOT_FOUND));
            return;
        }

        const result = PostModel.deletePost(postIdx);
        res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.DELETE_SUCCESS, result));
    }
}

module.exports = post;