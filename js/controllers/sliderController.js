app.controller('sliderController', function sliderController($scope){
    $scope.myInterval = 3000;
    $scope.slides = [
        {
            image: 'assets/img/slider1.png'
        },
        {
            image: 'assets/img/slider2.jpg'
        },
        {
            image: 'assets/img/slider3.jpeg'
        },
        {
            image: 'assets/img/slider4.jpg'
        }
    ];
})