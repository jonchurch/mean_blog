//GET /comments:postId
//GET /posts/:postId
//POST /posts/
//PUT/DEL /posts/:postId
'use strict';
(function() {
    angular.module('ngBlog').
    factory('UserService', PostService)

    PostService.$inject = ['$http']

    function PostService($http) {
        const baseUrl = 'https://calm-atoll-49293.herokuapp.com/users/'
        const service = {
            getPostComments: getPostComments,
            getPostById: getPostById,
            createPost: createPost,
            updatePost: updatePost,
            deletePost: deletePost
        }
        return service

        function getPostComments(postId) {
        	return $http.get(baseUrl + 'comments/' + postId)

        }

        function getPostById(postId) {
            return $http.get(baseUrl + postId)
        }

        function createPost(postObject) {
           return $http.post(baseUrl, postObject)
        }

        function updatePost(postId, updateObject) {
        	return $http.post(baseUrl, updateObject)
        }

        function deletePost(postId) {
        	return $http.get(baseUrl + postId)
        }

    }

})();
