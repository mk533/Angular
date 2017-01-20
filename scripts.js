//document.write("Hello Angular");
/*var button = document.createElement('button');
button.setAttribute('type', 'button')
button.appendChild(document.createTextNode('Main'));
document.body.appendChild(button);*/
/*var createWork = function () {
    var workCount = 0;
    var task1 = function () {
        workCount++;
        console.log("Task1 " + workCount);
    }
    var task2 = function () {
        workCount++;
        console.log("Task2 " + workCount);
    }
    return {
        job1: task1,
        job2: task2
    };
}

var worker = createWork();
worker.job1();
worker.job1();
worker.job2();
worker.job1();*/

var app = angular.module('myApp', []);
app.controller('MainController', function ($scope) {
    var person = {
        firstName: "Mani Kanta",
        lastName: "Moghili",
        Imagesrc: "https://cdn4.iconfinder.com/data/icons/superhero/128/flash.png"
    };
    $scope.message = "User is defined intially in this controller!!";
    $scope.candidate = person;
});
app.controller('GithubController', function ($scope, $http) {

    var ifSucess = function (response) {
        $scope.user = response.data;
        $http.get($scope.user.repos_url).then(onRepos, ifError);
    }
    var onRepos = function (response) {
        $scope.repos = response.data;
    };
    var ifError = function (reason) {

        $scope.error = reason;
    }

    $scope.search = function (username) {
        $http.get("https://api.github.com/users/" + username).then(ifSucess, ifError);

    }

    $scope.username = "angular"
    $scope.message = "Github Users";

});
app.controller('firstController', function ($scope) {
    $scope.message = "This is my First Controller!!";
});