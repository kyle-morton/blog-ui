'use strict';

angular.module('AngularApp', ['ui.router', 'ngResource', 'ngFileUpload', 'constantsModule', 'servicesModule', 'widgetModule', 'featureModule'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, appConstants) {

    $urlRouterProvider.otherwise('/home');

    var reusableViewBase = {
        navbar: {
            templateUrl: 'Widgets/navbar/navbar.html',
            controller: 'NavbarController'
        },
        footer: {
            templateUrl: 'Widgets/footer/footer.html',
            controller: 'FooterController'
        },
        header: {
            templateUrl: 'Widgets/header/header.html',
            controller: 'HeaderController'
        }
    };

    $stateProvider
        .state(appConstants.STATES.HOME.KEY, {
            url: appConstants.STATES.HOME.URL,
            views: angular.extend({}, reusableViewBase, {
                contentView: {
                    templateUrl: appConstants.STATES.HOME.TEMPLATE,
                    controller: 'HomeController'
                }
            })
        })
        .state(appConstants.STATES.ABOUT.KEY, {
            url: appConstants.STATES.ABOUT.URL,
            views: angular.extend({}, reusableViewBase, {
                contentView: {
                    templateUrl: appConstants.STATES.ABOUT.TEMPLATE,
                    controller: 'AboutController'
                }
            })
        })
        .state(appConstants.STATES.CONTACT.KEY, {
            url: appConstants.STATES.CONTACT.URL,
            views: angular.extend({}, reusableViewBase, {
                contentView: {
                    templateUrl: appConstants.STATES.CONTACT.TEMPLATE,
                    controller: 'ContactController'
                }
            })
        })
        .state(appConstants.STATES.POST.KEY, {
            url: appConstants.STATES.POST.URL,
            views: angular.extend({}, reusableViewBase, {
                contentView: {
                    templateUrl: appConstants.STATES.POST.TEMPLATE,
                    controller: 'PostController'
                }
            })
        })
        .state(appConstants.STATES.POST_HISTORY.KEY, {
            url: appConstants.STATES.POST_HISTORY.URL,
            views: angular.extend({}, reusableViewBase, {
                contentView: {
                    templateUrl: appConstants.STATES.POST_HISTORY.TEMPLATE,
                    controller: 'PostHistoryController'
                }
            })
        })
        .state(appConstants.STATES.POST_CREATE.KEY, {
            url: appConstants.STATES.POST_CREATE.URL,
            views: angular.extend({}, reusableViewBase, {
                contentView: {
                    templateUrl: appConstants.STATES.POST_CREATE.TEMPLATE,
                    controller: 'CreatePostController'
                }
            })
        });

    $locationProvider.hashPrefix('');
    
});