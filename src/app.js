(function() {
    'use strict';

    require('angular');
    require('angular-route');

    // Include modules
    require('modules/home');

    angular.module('someApp', ['ngRoute']);
        .config([
            '$locationProvider',
            '$routeProvider',
            function($locationProvider, $routeProvider) {
              $locationProvider.hashPrefix('!');
              // routes
              $routeProvider
                .when('/', {
                  templateUrl: './index.html',
                  controller: 'HomeCtrl'
                })
                .otherwise({
                   redirectTo: '/'
                });
            }
          ]);
})();
