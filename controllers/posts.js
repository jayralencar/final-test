var request = require("request"),
	cheerio = require("cheerio"),
	_post = require('../models/posts');

function Post(){}

Post.prototype.get = function(req, res) {
	getTypiCodePosts().then(data=>{
		res.status(200).send(data);
	}).catch(e=>{
		res.status(400).send(data);
	});
	getIFPEPosts().then(a=>{}).catch(e=>{})
};

function getTypiCodePosts(){
	return new Promise((resolve, reject)=>{
		request("https://jsonplaceholder.typicode.com/posts", function(err, res, body){
			if(err)
				reject(err)
			savePosts(JSON.parse(body))
			resolve(JSON.parse(body));
		});
	});
}

function savePosts(data){
	data.forEach(item=>{
		delete item.userId;
		_post.find({title:item.title}, function(err, posts){
			if(!posts.length){
				var post = new _post(item);
				post.save((err, data)=>{});
			}
		});
		
	});
}

function getIFPEPosts(){
	return new Promise((resolve, reject)=>{
		request('http://www.ifpe.edu.br/noticias', function (error, response, html) {
			if (!error && response.statusCode == 200) {
			}
		});	
	})
	
}

module.exports = new Post();