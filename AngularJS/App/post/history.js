'use strict';

angular.module('featureModule')
    .controller('PostHistoryController', function ($scope, headerService, postService) {

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

        $scope.load = function() {
            console.log('loading more entries...');
        }

        $scope.init();

});