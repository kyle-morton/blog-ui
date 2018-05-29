'use strict';

angular.module('servicesModule')
    .service('storageService', function ($window) {

        return {
            //get value from local storage using key
            getItem: function (key) {
                return $window.localStorage.getItem(key);
            },
            //set value in local storage with key
            setItem: function (key, value) {
                $window.localStorage.setItem(key, value);
            },
            //clear value in local storage of key
            clearItem: function (key) {
                $window.localStorage.removeItem(key, null);
            }
        }
    });