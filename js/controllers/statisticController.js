app.controller('statisticController',
    function statisticController($scope, $localStorage) {
        $scope.getHeaders = function () {
            $scope.storedStatistic = angular.fromJson($localStorage.statistic);
            var data = angular.fromJson($scope.storedStatistic[0]);
            return Object.keys(data);
        }
        console.log($scope.getHeaders());
});