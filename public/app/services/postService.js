'use strict';

app.factory("postService", function($http, api) {
	return {
		all: function(){
			return $http.get(api+"/posts");
		},
		new: function(data){
			return $http.post(api+"/posts", data);
		}
	}
});