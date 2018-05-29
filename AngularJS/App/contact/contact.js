'use strict';

angular.module('featureModule')
    .controller('ContactController', function ($scope, headerService, appConstants) {

        $scope.init = function() {
            headerService.setHeaderAttributes(
                "Contact Me", 
                "Have questions? I have answers.", 
                "contact-bg.jpg"
            );
        }

        $scope.init();

});