app.controller('mainController',
    function mainController($rootScope, $scope, $location, $localStorage) {
        $scope.incoming = {test: ""};
        $scope.currentPath = $location.path();

        $rootScope.$on('$routeChangeStart', function (event, current, next) {
            var currentPath = $location.path();
            if (currentPath != '/test') {
                $scope.incoming = {test: ""};
            }
        });

        $scope.statistic = {};

        $localStorage.statistic = [];
});