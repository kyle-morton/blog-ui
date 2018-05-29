'use strict';

angular.module('servicesModule')
    .service('headerService', function () {

        var headerService = {};
        headerService.header = {};
        headerService.setHeaderAttributes = function(title, subtitle, image, byline) {
            this.header["title"] = title;
            this.header["subtitle"] = subtitle;
            this.header["image"] = image;
            this.header["byline"] = byline ? byline : '';
        }

        return headerService;
    });