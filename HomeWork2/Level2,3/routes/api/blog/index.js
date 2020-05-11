var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    const result = {
        status : 200,
        message : 'api~!'
    }

    res.status(200).send(result);
});

router.use('/post', require('./post'));

module.exports = router;