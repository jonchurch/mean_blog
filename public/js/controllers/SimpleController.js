(function(){
	'use strict';
	angular.module('ngBlog').
		controller('SimpleController', SimpleController)
		SimpleController.$inject = ['$scope', 'UserService']

		function SimpleController($scope, UserService){
			$scope.message = 'Well, here you are'
			UserService.getAllUsers().
				then(function(response){
					console.log(response)
				})
				const userObj = {
					firstName: 'lil',
					lastName: 'pizza',
					age: 24,
					email: 'lilspaghetti@italian.com'
				}
				UserService.createUser(userObj).
					then(function(response){
						console.log(response)
					})
		}
})();
