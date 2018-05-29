'use strict';

angular.module('featureModule', [])
    .controller('HomeController', function ($scope, postService, headerService, navService, appConstants) {

        $scope.loading = true;
        $scope.posts = [];

        $scope.init = function() {
            headerService.setHeaderAttributes(
                "Clean Blog", 
                "A Blog Theme by Start Bootstrap", 
                "home-bg.jpg"
            );
    
            postService.getAll(function(response) {
                $scope.posts = response.data;            
                $scope.loading = false;
            });
        }

        $scope.toHistory = function() {
            navService.go(appConstants.STATES.POST_HISTORY.KEY);
        }
        $scope.toNew = function() {
            navService.go(appConstants.STATES.POST_CREATE.KEY);
        }

        $scope.init();
});