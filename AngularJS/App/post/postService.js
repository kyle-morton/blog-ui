'use strict';

angular.module('featureModule')
    .service('postService', function (urlService, promiseService, apiService) {

        return {
            getAll: function(callback) {
                var url = urlService.entries();
                console.log('get all: ' + url);
                promiseService.handlePromise(
                    apiService.get(url, {}),
                    callback
                );
            },
            get: function(id, callback) {
                var url = urlService.entries();
                console.log('get: ' + url);
                promiseService.handlePromise(
                    apiService.get(url, {}),
                    callback
                );
            },
            create: function(entry, callback) {
                var url = urlService.entries();
                console.log('creating: ' + JSON.stringify(entry));
                promiseService.handlePromise(
                    apiService.post(url, entry, {}),
                    callback
                );
            }
        };
    });