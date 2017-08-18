var app = angular.module('questionnaire', ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/main.tpl.html"
        })
        .when("/form", {
            templateUrl: "templates/form.tpl.html",
            controller: "QuestionnaireController"
        })
        .when("/results", {
            templateUrl: "templates/results.tpl.html",
            controller: "ResultsController"
        });
});