var app = angular.module('myApp');

app.controller("RepoController", function ($http, $scope, $routeParams) {

    var reponame = $routeParams.reponame;
    var username = $routeParams.username;
    var repoUrl;
    var repo;
    console.log("in Repos");
    var ifSucess = function (response) {
        $scope.user = response.data;
        console.log("Success in repos");
        $http.get($scope.user.repos_url).then(onRepos, ifError);
    }
    var onRepos = function (response) {
        //  console.log(response.data);
        $scope.repo = response.data;
        repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
        $http.get(repoUrl).then(Reponame, ifError);
    };
    var Reponame = function (response) {
        $scope.repo = response.data;
        $http.get(repoUrl + "/contributors").then(function (response) {
            $scope.repo.contributors = response.data;
        });
    };
    var ifError = function (reason) {
        console.log("Failure in repos");
        $scope.error = reason;
    }

    $http.get("https://api.github.com/users/" + $scope.username).then(ifSucess, ifError);

});