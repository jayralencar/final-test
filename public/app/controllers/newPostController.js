'use strict';

app.controller("newPostController", function($scope, $location, $timeout, postService){
	$scope.status = 0;
	$scope.savePost = function(){
		$scope.status = 1;
		postService.new($scope.post).then(function(res){
			$scope.post = {};
			$scope.status = 2;
			$scope.alertClass = 'alert-success';
			$scope.alertMessage = "Salvo com sucesso.";

			$timeout(function(){
				$location.path("/post/"+res.data._id)
			}, 1000)
		},function(e){
			$scope.alertClass = 'alert-danger';
			$scope.alertMessage = "Erro ao salvar, entre em contato com o administrador do sistema."
		})
	}
});