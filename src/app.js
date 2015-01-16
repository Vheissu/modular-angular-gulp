(function() {
    'use strict';

    require('angular');
    require('angular-route');

    angular.module('someApp', ['ngRoute']);
        .config([
            '$locationProvider',
            '$routeProvider',
            function($locationProvider, $routeProvider) {
              $locationProvider.hashPrefix('!');
              // routes
              $routeProvider
                .when("/", {
                  templateUrl: "./index.html",
                  controller: "HomeCtrl"
                })
                .otherwise({å
                   redirectTo: '/'
                });
            }
          ]);

    var HomeCtrl = require('./modules/home/controllers/homectrl');

    angular.module('someApp').controller('HomeCtrl', ['$scope', HomeCtrl]);
})();
