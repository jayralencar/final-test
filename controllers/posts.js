var request = require("request"),
cheerio = require("cheerio"),
_post = require('../models/posts');

function Post(){}

Post.prototype.all = function(req, res) {
	_post.find({}, function(err, posts){
		if(err) res.status(500).send(err);
		res.status(200).send(posts);
	});	
};

Post.prototype.find = function(req, res){
	_post.find({_id: req.params._id}, function(err, data){
		if(err) res.status(404).send("Post not found");
		res.status(200).send(data);
	});
}

Post.prototype.new = function(req, res){
	var post = new _post(req.body);
	post.save((err, data)=>{
		if(err) reject(err);
		resolve(data);
	});
}

Post.prototype.update = function(req, res){
	var _id = req.params._id;
	_post.update({_id: _id}, req.body, function(err, data){
		if(err) res.status(500).send(err);
		res.status(200).send({
			success: 1
		});
	});
}

Post.prototype.delete = function(req, res){
	var _id = req.params._id;
	_post.remove({_id: _id}, function(err){
		if(err) res.status(500).send(err);
		res.status(200).send({
			success: 1
		});
	})
}

module.exports = new Post();