var app = angular.module('myApp');

app.controller('UserController', function ($scope, $http, $routeParams) {

    var ifSucess = function (response) {
        $scope.user = response.data;
        console.log("Success");
        $http.get($scope.user.repos_url).then(onRepos, ifError);
    }
    var onRepos = function (response) {
        $scope.repos = response.data;
    };
    var ifError = function (reason) {
        console.log("Failure");
        $scope.error = reason;
    }
    console.log($routeParams.username);
    $scope.username = $routeParams.username;

    $http.get("https://api.github.com/users/" + $scope.username).then(ifSucess, ifError);

});