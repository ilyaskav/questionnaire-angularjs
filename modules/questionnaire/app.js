'use strict';

angular.module('questionnaire', ['ngRoute', 'ui.bootstrap']);

angular.module('questionnaire').config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
}]);

angular.module('questionnaire').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'questionnaire/templates/main.tpl.html'
        })
        .when('/form', {
            templateUrl: 'questionnaire/templates/form.tpl.html',
            controller: 'QuestionnaireController'
        })
        .when('/results', {
            templateUrl: 'questionnaire/templates/results.tpl.html',
            controller: 'ResultsController'
        })
        .when('/404', { templateUrl: 'questionnaire/templates/404.error.tpl.html' })
        .otherwise({ redirectTo: '/404' });
});