'use strict';

app.factory("postService", function($http, api) {
	return {
		all: function(){
			return $http.get(api+"/posts");
		},
		new: function(data){
			return $http.post(api+"/posts", data);
		},
		get: function(id){
			return $http.get(api+"/posts/"+id);
		},
		update: function(id, data){
			return $http.put(api+"/posts/"+id, data);
		},
		delete: function(id){
			return $http.delete(api+"/posts/"+id);
		}
	}
});