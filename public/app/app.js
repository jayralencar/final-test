var app = angular.module("app",['ngRoute','angularUtils.directives.dirPagination']);

app.value("api","http://localhost:8000/api");

app.config(function(paginationTemplateProvider) {
	paginationTemplateProvider.setPath('app/views/dirPagination.tpl.html');
});

app.config(function($routeProvider, $locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider.when("/",{
		templateUrl: "app/views/home.html",
		controller: "homeController"
	}).when('/novo-post',{
		templateUrl: "app/views/post.html",
		controller: "newPostController"
	}).when("/post/:id",{
		templateUrl: "app/views/post.html",
		controller: "editPostController"
	})
});
