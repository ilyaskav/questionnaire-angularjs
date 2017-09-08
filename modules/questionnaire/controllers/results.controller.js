angular.module('questionnaire')
    .controller('ResultsController', ['$scope', '$http',
        function($scope, $http) {
            $scope.answers = [];

            $scope.getAnswers = function() {
                $http.get('api/results').then(function(response){
                    response.data.forEach((el) => el.created = moment(el.created).format('MMMM Do YYYY, h:mm:ss a'));
                    $scope.answers = response.data;
                },function (){
                    console.log('cannot get answers');
                });
            };

            $scope.getAnswers();
        }]);