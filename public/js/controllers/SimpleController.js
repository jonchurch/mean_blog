(function() {
    angular.module('ngBlog')
        .controller('SimpleController', SimpleController)

    function SimpleController($scope) {
    	$scope.message = 'Hey! Angular Works!'
    }

})();
