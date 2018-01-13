var express = require('express');
var router = express.Router();

var posts = require("../controllers/posts.js");

/**
* @api {get} /posts Lista all posts
* @apiGroup Post
* @apiSuccess {Object[]} posts Post's lists
* @apiSuccess {String} id Post's id
* @apiSuccess {String} title Post's title
* @apiSuccess {String} body Post's content
* @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "_id": 5a5a3bd56ee705130895e581,
 *      "title": "ullam ut quidem id aut vel consequuntur",
 *      "body": "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Intern	al Server Error
*/
router.get('/posts', posts.all);

/**
* @api {get} /posts/:id get post
* @apiGroup Post
* @apiSuccess {Object} post Post object
* @apiSuccess {String} id Post's id
* @apiSuccess {String} title Post's title
* @apiSuccess {String} body Post's content
* @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "_id": 5a5a3bd56ee705130895e581,
 *      "title": "ullam ut quidem id aut vel consequuntur",
 *      "body": "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
 *    }
 *@apiErrorExample {json} List error
 * HTTP/1.1 500 Internal Error
*/
router.get("/posts/:_id", posts.find);

module.exports = router;
