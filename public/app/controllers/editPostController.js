'use strict';

app.controller("editPostController", function($scope, $timeout, $routeParams, postService) {
	$scope.status = 0;
	$scope.init = function(){
		postService.get($routeParams.id).then(function(res){
			$scope.post = res.data;
		}, function(err){
			alert(err)
		});
	}
	$scope.savePost = function(){
		$scope.status = 1;
		postService.update($scope.post._id, $scope.post).then(function(res){
			$scope.status = 2;
			$scope.alertClass = "alert-success";
			$scope.alertMessage = "Alterado com sucesso!";
			$timeout(function(){
				$scope.status = 0;
			},2000);
		}, function(err){
			$scope.status = 2;
			$scope.alertClass = "alert-erro";
			$scope.alertMessage = "Aconteceu algum erro na alteração!";
		});
	}
})