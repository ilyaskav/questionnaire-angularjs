angular.module('questionnaire')
    .controller('QuestionnaireController', ['$scope', '$http',
        function($scope, $http) {
            $scope.formData={};

            $scope.submit = function() {
                $scope.formData.codeQuality = $scope.slider.getValue();
                var sprintCodeQuality = getSprintCodeQuaility($scope.formData.codeQuality, $scope.formData.lengthOfSprint);
                var questionRating = getQuestionRating(sprintCodeQuality, getKPI($scope.formData.bestDev));

                showSprintStatus(questionRating, '#sprintStatus');

                $http.post('api/submitForm', $scope.formData)
                    .then(function() {
                        $('.alert-success').show();
                        $scope.formData= {};
                    },
                    function() {
                        $('.alert-danger').show();
                        console.log('Error sending the form')
                    });
            };

            $scope.slider = new Slider("#codeQuality", {
                min: 1,
                max: 10
            });
        }]);