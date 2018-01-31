app.controller('testController',
    function testController($rootScope, $scope, $q) {
        $scope.test = $scope.incoming.test;

        var quest = angular.element(document.querySelectorAll(".question-item"));
        quest.css("display", "none");

        $scope.questItem = function (index) {
            quest.css("display", "none");
            return quest.eq(index).css("display", "block");
        };

        $scope.statistic.test = $scope.test.name;
        console.log($scope.statistic);


    });