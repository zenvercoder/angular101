var app = angular.module("madLibsApp", []);
app.controller("MadLibsController", function($scope){
    $scope.showLib = false;

    $scope.toggleShowLib = function toggleShowLib(){
        if($scope.showLib){
            $scope.boys_name =
            $scope.adjective =
            $scope.plural_noun1 =
            $scope.plural_noun2 =
            $scope.insects =
            $scope.plural_noun3 =
            $scope.s_verb = "";

        }
        $scope.showLib = !$scope.showLib;
    }
});
