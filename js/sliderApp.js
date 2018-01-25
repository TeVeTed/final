var sliderApp = angular.module('sliderApp', ['ui.bootstrap']);
sliderApp.controller('CarouselDemoCtrl', function CarouselDemoCtrl($scope){
    $scope.myInterval = 3000;
    $scope.slides = [
        {
            image: 'assets/img/slider1.png',
            // secondTitle: 'Knowledge is power',
            // description: 'Any successfull career starts with good education'
        },
        {
            image: 'assets/img/slider2.jpg',
            // secondTitle: 'Knowledge is power',
            // description: 'Any successfull career starts with good education'
        },
        {
            image: 'assets/img/slider3.jpeg',
            // secondTitle: 'Knowledge is power',
            // description: 'Any successfull career starts with good education'
        },
        {
            image: 'assets/img/slider4.jpg',
            // secondTitle: 'Knowledge is power',
            // description: 'Any successfull career starts with good education'
        }
    ];
})