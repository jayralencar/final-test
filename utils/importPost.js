var request = require("request"),
cheerio = require("cheerio"),
_post = require('../models/posts');

function importPost(){}

importPost.prototype.typicode = function(){
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

importPost.prototype.getIFPEPosts = function(){
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

function savePost(data){
	return new Promise((resolve, reject) => {
		_post.find({title:data.title}, function(err, posts){
			if(!posts.length){
				var post = new _post(data);
				post.save((err, data)=>{
					if(err) reject(err);
					resolve(data);
				});
			}else{
				reject({error: true})
			}
		});	
	})
}

module.exports = new importPost();