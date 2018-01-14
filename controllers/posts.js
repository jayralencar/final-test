var request = require("request"),
cheerio = require("cheerio"),
_post = require('../models/posts');

function Post(){}

Post.prototype.all = function(req, res) {
	getTypiCodePosts().then(data=>{
		getIFPEPosts().then(a=>{
			
		}).catch(e=>{});
	}).catch(e=>{
		res.status(400).send(data);
	});
	getPosts().then(data=>{
		res.status(200).send(data);
	});
};

Post.prototype.find = function(req, res){
	_post.find({_id: req.params._id}, function(err, data){
		if(err) res.status(404).send("Post not found");
		res.status(200).send(data);
	});
}

Post.prototype.new = function(req, res){
	savePost(req.body).then(post=>{
		res.send(post);
	}).catch(err=>{
		res.send(err);
	})
}

Post.prototype.update = function(req, res){
	var _id = req.params._id;
	_post.update({_id: _id}, req.body, function(err, data){
		if(err) res.send(err);
		res.send({
			success: 1
		});
	})
}

function getTypiCodePosts(){
	var promises = [];
	request("https://jsonplaceholder.typicode.com/posts", function(err, res, body){
		if(err)
			reject(err)
		JSON.parse(body).forEach(item=>{
			promises.push(new Promise((resolve, reject)=>{
				delete item.id;
				delete item.userId;
				savePost(item).then((newPost)=>{
					resolve();
				})
			}))
		})
	});
	return Promise.all(promises);

}

function savePost(data){
	return new Promise((resolve, reject) => {
		_post.find({title:data.title}, function(err, posts){
			if(!posts.length){
				var post = new _post(data);
				post.save((err, data)=>{
					if(err) reject(err);
					resolve(data);
				});
			}
		});	
	})
}

function getIFPEPosts(){
	var promises = [];
	request('http://www.ifpe.edu.br/noticias', function (error, response, html) {
		if (!error && response.statusCode == 200) {
			var $ = cheerio.load(html);
			$(".tileItem").each(function(i, el){
				promises.push(new Promise((resolve, reject)=>{
					var data ={
						title: $(el).find('.tileHeadline').children('a').text(),
						body: $(el).children('p').text(),
					};	
					savePost(data).then(d=>{
						resolve(d)
					}).catch(e=>{
						reject(e);
					})
				}));
			});
		}
	});

	return Promise.all(promises);	
}

function getPosts(){
	return new Promise((resolve,reject)=>{
		_post.find({}, function(err, posts){
			if(err) reject(err);
			resolve(posts);
		});	
	});
}

module.exports = new Post();