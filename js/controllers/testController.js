app.controller('testController',
    function testController($rootScope, $scope, $localStorage) {
        $scope.test = $scope.incoming.test;

        var quest = angular.element(document.querySelectorAll(".question-item"));
        quest.css("display", "none");
        quest.eq(0).css("display", "block");

        $scope.questItem = function (index) {
            quest.css("display", "none");
            quest.eq(index).css("display", "block");
        };

        $scope.statistic.test = $scope.test.name;

        $scope.statistic.answers = [];

        $scope.answerQuest = {};
        $scope.answer = function (index) {
            $scope.statistic.answers.push($scope.answerQuest);

            var quest2 = angular.element(document.querySelectorAll(".question-item"));
            quest2.css("display", "none");
            if (index + 1 < quest2.length) {
                quest2.eq(index+1).css("display", "block");
            } else {
                quest2.eq(0).css("display", "block");
            }

            if ($scope.statistic.answers.length === $scope.test.questions.length) {
                alert('Gratz, ' + $scope.statistic.username + '! You passed all questions from current test!');
                $localStorage.statistic.push(angular.toJson($scope.statistic));
                window.location = "#!/tests";


            }
        }
    });