app.controller('statisticController',
    function statisticController($scope, $localStorage) {
        $scope.storedStatistic = angular.fromJson($localStorage.statistic);

        $scope.getHeaders = function () {
            var data = angular.fromJson($scope.storedStatistic[0]);
            return Object.keys(data);
        }


        $scope.stats = [];
        $scope.getStats = function () {
            for (i=0; i<=$scope.storedStatistic.length-1; i++) {
                $scope.stats.push(angular.fromJson($scope.storedStatistic[i]));
            }
        }
        $scope.getStats();

        console.log($scope.stats);
});