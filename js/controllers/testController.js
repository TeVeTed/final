app.controller('testController',
    function testController($scope, $q) {
    $scope.test = $scope.incoming.test;

    var quest = angular.element(document.querySelectorAll(".question-item"));
    //quest.css("display", "none");


})