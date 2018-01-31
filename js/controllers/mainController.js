app.controller('mainController',
    function mainController($scope) {
        $scope.incoming = {test: ""};

        $scope.questItem = function (index) {
            return index;
        }


});