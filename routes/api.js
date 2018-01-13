var express = require('express');
var router = express.Router();

var posts = require("../controllers/posts.js");

/* GET users listing. */
router.get('/posts', posts.get);

module.exports = router;
