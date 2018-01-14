'use strict';

app.controller("homeController", function($scope, postService) {
	$scope.init = function(){
		$scope.getPosts();
	}

	$scope.getPosts = function(){
		postService.all().then(function(body){
			$scope.posts = body.data;
		});
	}

	$scope.delete = function(post){
		postService.delete(post._id).then(function(res){
			$scope.getPosts();
		});
	}

});