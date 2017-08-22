angular.module('questionnaire')
    .controller('ResultsController', ['$scope', '$http',
        function($scope, $http) {
            $scope.answers = [];

            $scope.getAnswers = function() {
                $http.get('api/results').then(function(response){
                    $scope.answers = response.data;
                },function (){
                    console.log('cannot get answers');
                });
            }

            $scope.getAnswers();
        }]);