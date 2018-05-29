'use strict';

angular.module('widgetModule')
    .controller('HeaderController', function ($scope, appConstants, headerService) {

        $scope.header = headerService.header;
        $scope.style = function() {
            return {
                'background-image':'url(assets/images/' + $scope.header.image + ')'
            };
        }
});