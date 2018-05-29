'use strict';

angular.module('featureModule')
    .controller('AboutController', function ($scope, headerService, appConstants) {

        $scope.init = function() {
            headerService.setHeaderAttributes(
                "About Me", 
                "This is what I do.", 
                "about-bg.jpg"
            );
        }

        $scope.init();

});