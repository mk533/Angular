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

var app = angular.module('myApp');

app.controller('MainController', function ($scope, $location, $rootScope) {

    $scope.message = "Enter Github UserName";
    $scope.search = function (username) {

        $location.path("/user/" + username);
        console.log($location.path());
        console.log("After click");
        /*  $rootScope.$apply(function () {
              $location.path("/abc");
              console.log($location.path());
          });*/
    };


});