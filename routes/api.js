var express = require('express');
var router = express.Router();

var posts = require("../controllers/posts.js");
var validData = require("../middleware/validData");

/**
* @api {get} /api/posts Lista all posts
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
* @api {get} /api/posts/:id get post
* @apiGroup Post
* @apiParam {String} id Post's id
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

/**
* @api {post} /api/post create new post
* @apiGroup Post
* @apiParam {String} title Post's title
* @apiParam {String} body Post's content
* @apiParamExample {json} Input
*	{
*		"title": "ullam ut quidem id aut vel consequuntur",
*		"body": "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
*	}
* @apiSuccess {Object} post inserted post
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
router.post("/posts", validData, posts.new);

/**
* @api {put} /api/posts/:_id update post information
* @apiGroup Post
* @apiParam {String} _id post id
* @apiParamExample {json} Input
*	{
*		"title": "ullam ut quidem id aut vel consequuntur",
*		"body": "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
*	}
* @apiSuccess {Object} post inserted post
* @apiSuccess {Boolean} success Success result
* @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "success": true
 *    }
 *@apiErrorExample {json} List error
 * HTTP/1.1 500 Internal Error
*/
router.put("/posts/:_id", validData, posts.update);

/**
* @api {delete} /api/posts/:_id Delete a post
* @apiGroup Post
* @apiParam {String} _id post id
* @apiSuccess {Object} post inserted post
* @apiSuccess {Boolean} success Success result
* @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "success": true
 *    }
 *@apiErrorExample {json} List error
 * HTTP/1.1 500 Internal Error
*/
router.delete("/posts/:_id", posts.delete);

module.exports = router;
