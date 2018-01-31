var app = angular.module('app', ['ui.bootstrap', 'ngRoute']).
    config(function ($routeProvider) {
        $routeProvider.when('/tests',
            {
                templateUrl: 'views/tests.html',
                controller: 'testsController'
            });
        $routeProvider.when('/test',
            {
                templateUrl: 'views/test.html',
                controller: 'testController'
            });
        $routeProvider.when('/statistic',
            {
                templateUrl: 'views/statistic.html',
                controller: 'statisticController'
            });
        $routeProvider.when('/contacts',
            {
                templateUrl: 'views/contacts.html',
                controller: 'contactsController'
            });
});