(function() {
    'use strict';

    var HomeCtrl = function($scope) {
        $scope.testVariable = 'This is a test variable value being populated from the home module controller';
    };

    module.exports = HomeCtrl;
})();
