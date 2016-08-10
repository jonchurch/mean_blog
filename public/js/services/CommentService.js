//GET /comments/:postId
//POST /comments/
//Put/DELETE /comments/:commentId
'use strict';
(function() {
    angular.module('ngBlog').
    factory('CommentService', CommentService)

    CommentService.$inject = ['$http']

    function CommentService($http) {
        const baseUrl = 'https://calm-atoll-49293.herokuapp.com/users/'
        const service = {
            createComment: createComment,
            getPostComments: getPostComments,
            updateComment: updateComment,
            deleteComment: deleteComment
        }
        return service

        function createComment(commentObject) {
        	return $http.post(baseUrl + commentObject)
        }

        function getPostComments(commentId) {
            return $http.post(baseUrl + commentId)
        }

        function updateComment(commentId, updateObject) {
            return $http.post(baseUrl + updateObject)
        }

        function deleteComment(commentId) {
            return $http.delete(baseUrl + commentId)
        }

    }
})();
