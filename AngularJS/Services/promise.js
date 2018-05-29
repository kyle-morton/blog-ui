'use strict';

angular.module('servicesModule')
    .service('promiseService', function () {

        return {

            //handle promise object's success/error.
            //return promise or call the callback (if !null)
            handlePromise: function (promise, callback) {

                if (callback) {
                    promise.then(function successCallback(response) {
                        callback(response);
                    }, function errorCallback(response) {
                        callback(false);
                    });
                    return null;
                } else
                    return promise;


            }
        };
    });