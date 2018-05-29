'use strict';

angular.module('servicesModule')
    .service('urlService', function (appConstants) {
        return {
            base: function() {
                return appConstants.API.BASE;
            },
            entries: function() {
                return appConstants.API.ENTRIES
            }
        }
    });