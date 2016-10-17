var app = angular.module("secondApp", []);
app.controller("ExercisesController", function($scope){
    $scope.FavColor = "Blue";
    $scope.secondsInACentury = 60 * 60 * 24 * 365 * 100;
    $scope.rightNow = Date.now();
});