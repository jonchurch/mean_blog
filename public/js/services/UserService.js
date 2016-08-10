//GET /users/
//POST /users/
//GET/PUT/DEL /users/:id
//
'use strict';
(function() {
    angular.module('ngBlog').
    factory('UserService', UserService)

    UserService.$inject = ['$http']

    function UserService($http) {
        const baseUrl = 'https://calm-atoll-49293.herokuapp.com/users/'
        const service = {
            getAllUsers: getAllUsers,
            createUser: createUser,
            getOneUser: getOneUser,
            updateUser: updateUser,
            deleteUser: deleteUser
        }
        return service

        function getAllUsers() {
        	return $http.get(baseUrl)
        }

        function createUser(userObject) {
        	return $http.post(baseUrl + userObject)
        }

        function getOneUser(userId) {
            return $http.post(baseUrl + userId)
        }

        function updateUser(userId, updateObject) {
            return $http.post(baseUrl + updateObject)
        }

        function deleteUser(userId) {
            return $http.delete(baseUrl + userId)
        }

    }
})();
