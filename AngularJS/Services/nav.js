'use strict';

angular.module('servicesModule')
    .service('navService', function ($state, appConstants) {

        return {
            go: function(state, header, stateParams) {
                $state.go(state, stateParams);
            }
        };
    });