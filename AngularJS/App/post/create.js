'use strict';

angular.module('featureModule')
    .controller('CreatePostController', function ($scope, headerService, postService) {

        $scope.init = function() {
            $scope.submitting = false;
            headerService.setHeaderAttributes(
                "New Post", 
                "", 
                "post-bg.jpg"
            );
        }

        $scope.submit = function(isValid) {
            $scope.submitted = true;
            console.log('is valid: ' + isValid);
            if (isValid) {
                $scope.submitting = true;
                console.log('post: ' + JSON.stringify($scope.post));
                postService.create($scope.post, function(response) {
                    console.log('post create response: ' + JSON.stringify(response));
                })
            }
        }

        $scope.init();
});