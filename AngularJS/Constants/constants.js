'use strict';

angular.module('constantsModule', [])
    .constant('appConstants', {
    STATES: { //angular ui-routing states
        HOME: {
            KEY: 'home',
            URL: '/home',
            TEMPLATE: 'App/home/home.html'
        },
        CONTACT: {
            KEY: 'contact',
            URL: '/contact',
            TEMPLATE: 'App/contact/contact.html'
        },
        ABOUT: {
            KEY: 'about',
            URL: '/about',
            TEMPLATE: 'App/about/about.html'
        },
        POST: {
            KEY: 'post',
            URL: '/post',
            TEMPLATE: 'App/post/post.html'
        },
        POST_CREATE: {
            KEY: 'post-new',
            URL: '/post/new',
            TEMPLATE: 'App/post/create.html'
        },
        POST_HISTORY: {
            KEY: 'posts',
            URL: '/posts',
            TEMPLATE: 'App/post/history.html'
        }
    },
    STORAGE: {
        TOKEN_NAME: 'AuthToken' //name of auth token in local storage
    },
    API: {
        BASE: 'https://mkm-node-api.herokuapp.com/',
        ENTRIES: 'entries'
    }
});