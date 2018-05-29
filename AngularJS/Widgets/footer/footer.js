'use strict';

angular.module('widgetModule')
    .controller('FooterController', function ($scope, $location, navService, appConstants) {

        $scope.year = (new Date()).getFullYear();

});