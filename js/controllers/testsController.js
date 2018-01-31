app.controller('testsController',
    function testsController($scope, dataService, $location, $http) {
        var promiseObj = dataService.getData();
        promiseObj.then(function (value) { $scope.tests = value });

        $scope.loaded=false;

        $scope.getTest = function (index){
            $http({method: 'GET', url: 'tests.json'}).
            then(function success(response) {
                $scope.incoming.test=response.data[index].test;
                $scope.loaded=true;
                window.location = "#!/test";
            });

            $scope.username = function () {
                $scope.statistic.username = prompt('Please enter your name to collect your personal statictic');
            }
        };
    });