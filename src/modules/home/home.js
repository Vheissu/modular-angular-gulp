(function() {
    'use strict';

    var HomeCtrl = require('controllers/homectrl');

    module.exports = 
        angular.module('someApp')
        .controller('HomeCtrl', ['$scope', HomeCtrl]);
})();
