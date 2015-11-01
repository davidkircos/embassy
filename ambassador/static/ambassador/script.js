var myApp = angular.module('myApp', []);

myApp.controller('GreetingController', ['$scope', '$http', function ($scope, $http) {

    $scope.errorVisible = false;
    $scope.error = "";

    $scope.links = [];
    $scope.selectedLink = {};

    $scope.newLinkName = '';

    $scope.loadLinks = function () {
        var httpRequest = $http({
            method: 'GET',
            url: '/api/links/',

        }).success(function (data, status) {
            $scope.links = data;
        });

    };

    $scope.loadLinks();

    //Attempt to create a new Link
    $scope.submit = function () {
        var data = {
            title: $scope.newLinkName
        }
        $http.post("/api/links/", data)
            .success(function (data, status) {
                $scope.loadLinks();
                $scope.newLinkName = '';
                $scope.errorVisible = false;
            })
            .error(function (data, status) {
                $scope.error = data.title[0];
                $scope.errorVisible = true;

            })
    };

    // gets the template either edit or display, if link is being edited
    $scope.getTemplate = function (contact) {
        if (Object.keys($scope.selectedLink).length === 0) {
            return 'display';
        } else if (contact.id === $scope.selectedLink.id) {
            return 'edit';
        }
        return 'display';
    };

    // change template to edit for link being edited (makes form appear)
    $scope.editLink = function (contact) {

        $scope.selectedLink = angular.copy(contact);
        $scope.errorVisible = false;
    };

    // save edited link
    $scope.saveLink = function (idx) {

        // Save new title

        $http.put('/api/links/' + $scope.links[idx].id + '/', $scope.links[idx])
            .success(function (data, status) {
                $scope.reset();
                $scope.errorVisible = false;
            })
            .error(function (data, status) {
                $scope.error = data.title[0];
                $scope.errorVisible = true;
            });
    };

    // delete selected link
    $scope.deleteLink = function (idx) {
        $http.delete('/api/links/' + $scope.links[idx].id + '/', $scope.links[idx])
            .success(function (data, status) {
                $scope.reset();
            })
    }

    // refreshes the view, clears errors
    $scope.reset = function () {
        $scope.loadLinks();
        $scope.selectedLink = {};
        $scope.errorVisible = false;
    };

}]);