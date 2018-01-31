app.controller("navController", function navController($scope, $http) {
    $scope.menus = [
        {
            title: "Main",
            action: "#"
        },
        {
            title: "Tests",
            action: "tests",
            menus: [
                {
                    title: "Test 1",
                    action: "#"
                },
                {
                    title: "Test 2",
                    action: "#"
                }
            ]
        },
        {
            title: "Contacts",
            action: "#"
        }
    ]
});