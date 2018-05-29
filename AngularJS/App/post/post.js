'use strict';

angular.module('featureModule')
    .controller('PostController', function ($scope, headerService, postService) {

        $scope.init = function() {
            headerService.setHeaderAttributes(
                "Man must explore, and this is exploration at its greatest", 
                "Problems look mighty small from 150 miles up", 
                "post-bg.jpg",
                "Posted by Start Bootstrap on August 24, 2018"
            );
        }

        $scope.init();

});