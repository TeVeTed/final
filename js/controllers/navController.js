app.controller("navController", function navController($scope, $http) {
    $scope.menus = [
        {
            title: "Main",
            action: ""
        },
        {
            title: "Tests",
            action: "tests",
            menus: [
                {
                    title: "Statictic",
                    action: "statistic"
                }
            ]
        },
        {
            title: "Contacts",
            action: "#"
        }
    ]
});