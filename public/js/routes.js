'use strict';
(function() {
    angular.module('ngBlog').
    config(RouteConfig);
    RouteConfig.$inject = ['$routeProvider']

    function RouteConfig($routeProvider, $locationProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'html/views/home.html',
            controller: 'HomeController'
        }).
        when('/login', {
            templateUrl: '/html/views/login.html',
            controller: 'LoginController'
        }).when('/signup', {
            templateUrl: '/html/views/signup.html',
            controller: 'SignUpController'
        }).when('/profile', {
            templateUrl: '/html/views/profile.html',
            controller: 'ProfileController'
        }).when('/post', {
            templateUrl: '/html/views/post.html',
            controller: 'PostController'
        }).when('/post/create', {
            templateUrl: '/html/views/post-create.html',
            controller: 'PostController'
        }).when('/post/edit', {
            templateUrl: '/html/views/post-edit.html',
            controller: ''
        }).otherwise({
            redirectTo: '/'
        })
    }

})();
