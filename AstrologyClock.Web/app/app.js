'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
    'app.version',
    'ui.bootstrap',
    'ui.router'
]);



app.config(function($stateProvider, $urlRouterProvider) {

  //  $urlRouterProvider.otherwise('home');
    $stateProvider
        .state('app', { url: '/app', templateUrl: 'views/app.html', controller: 'appController' });


    $stateProvider.state('app.home', {
        url: "/home",
        templateUrl: "views/home.html",
        controller: "homeController",
        data:
        {
            displayName: 'Home'
        }
    });

    $stateProvider.state('app.about', {
        url: "/about",
        templateUrl: "views/about.html",
        controller: "aboutController",
        data:
        {
            displayName: 'About'
        }
    });
})