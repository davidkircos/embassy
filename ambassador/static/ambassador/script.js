var myApp = angular.module('myApp', []);

myApp.controller('GreetingController', ['$scope', '$http', function ($scope, $http) {

    $scope.people = [];

    $scope.errorVisible = false;
    $scope.error = "";

    $scope.text = '';


    $scope.loadPeople = function () {
        var httpRequest = $http({
            method: 'GET',
            url: '/api/links/',

        }).success(function (data, status) {
            $scope.people = data;
        });

    };

    $scope.loadPeople();


    $scope.submit = function () {
        var data = {
            title: $scope.text
        }
        $http.post("/api/links/", data)
            .success(function (data, status) {
                $scope.loadPeople();
                $scope.text = '';
                $scope.errorVisible = false;
            })
            .error(function (data, status){
                $scope.error = data.title[0];
                $scope.errorVisible = true;

            })
    };

}]);