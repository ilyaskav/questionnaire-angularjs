angular.module('questionnaire')
    .controller('QuestionnaireController', ['$scope', '$http',
        function($scope, $http) {
            $scope.formData={};

            $scope.submit = function() {

                // form.serializeArray().map(function(x) { formData[x.name] = x.value; });

                // var sprintCodeQuality = getSprintCodeQuaility(formData.codeQuality, formData.lengthOfSprint);
                // var questionRating = getQuestionRating(sprintCodeQuality, getKPI(formData.bestDev));

                // showSprintStatus(questionRating, '#sprintStatus');

                $http.post('api/submitForm', $scope.formData)
                    .then(function() {
                        $('.alert-success').show();
                        // form[0].reset();
                    },
                    function() {
                        $('.alert-danger').show();
                        console.log('Error sending the form')
                    });
            };
        }]);