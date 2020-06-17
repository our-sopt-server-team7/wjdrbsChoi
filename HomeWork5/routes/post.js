var express = require('express');
var router = express.Router();
var postController = require('../controllers/post')

router.get('/', postController.showAllPost);
router.get('/:idx', postController.searchPost);
router.post('/', postController.createPost);

module.exports = router;