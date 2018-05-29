'use strict';

angular.module('widgetModule', [])
    .controller('NavbarController', function ($scope, $location, navService, appConstants) {

        console.log('navbar controller init...');

        $scope.home = function() {
            navService.go(appConstants.STATES.HOME.KEY);
        }
        $scope.about = function() {
            navService.go(appConstants.STATES.ABOUT.KEY);
        }
        $scope.contact = function() {
            navService.go(appConstants.STATES.CONTACT.KEY);
        }
        $scope.posts = function() {
            navService.go(appConstants.STATES.POST_HISTORY.KEY);
        }

});