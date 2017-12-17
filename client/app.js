var the_wall = angular.module('the_wall', ['ngRoute']);
    
    the_wall.config(function($routeProvider) {
        $routeProvider 
            .when('/', {
                templateUrl: './partials/indexuser.html',
                controller: 'userController',
                controllerAs: 'userCtrl'
            })
    })
