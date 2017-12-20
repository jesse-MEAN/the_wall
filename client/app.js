var the_wall = angular.module('the_wall', ['ngRoute', 'ngCookies']);
    
    the_wall.config(function($routeProvider, $locationProvider) {
        $routeProvider 
            .when('/', {
                templateUrl: './partials/indexuser.html',
                controller: 'userController',
                controllerAs: 'userCtrl'
            })
            .when('/dashboard', {
                templateUrl: './partials/dashboard.html',
                controller: 'dashboardController',
                controllerAs: 'dashboardCtrl'
            })
            .when('/logout', {
                redirectTo: '/'
            })
    })
