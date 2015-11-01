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
            .error(function (data, status) {
                $scope.error = data.title[0];
                $scope.errorVisible = true;

            })
    };

    $scope.selectedLink = {};

    // gets the template to ng-include for a table row / item
    $scope.getTemplate = function (contact) {
        if (Object.keys($scope.selectedLink).length === 0) {
            return 'display';
        } else if (contact.id === $scope.selectedLink.id) {
            return 'edit';
        }
        return 'display';
    };

    $scope.editContact = function (contact) {

        $scope.selectedLink = angular.copy(contact);
        $scope.errorVisible = false;
    };

    $scope.saveContact = function (idx) {

        // Save new title

        $http.put('/api/links/' + $scope.people[idx].id + '/', $scope.people[idx])
            .success(function (data, status) {
                $scope.reset();
                $scope.errorVisible = false;
            })
            .error(function (data, status) {
                $scope.error = data.title[0];
                $scope.errorVisible = true;
            });
    };

    $scope.reset = function () {
        $scope.loadPeople();
        $scope.selectedLink = {};
        $scope.errorVisible = false;
    };


}]);