'use strict';

angular.module('qq', ['ngRoute', 'ui.bootstrap']);

angular.module('qq').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
}]);

angular.module('qq').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'qq/templates/main.tpl.html'
        })
        .when('/form', {
            templateUrl: 'qq/templates/form.tpl.html',
            controller: 'qqController'
        })
        .when('/results', {
            templateUrl: 'qq/templates/results.tpl.html',
            controller: 'ResultsController'
        })
        .when('/404', { templateUrl: 'qq/templates/404.error.tpl.html' })
        .otherwise({ redirectTo: '/404' });
});