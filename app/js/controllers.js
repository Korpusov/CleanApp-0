'use strict';
//var fb = new Firebase('https://cleanapps.firebaseio.com/orders');

/* Controllers */

var app = angular.module('app', ["firebase", "ngRoute"]);


// app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) { 
//     // $routeProvider
//     //     .when("/", {
//     //         templateUrl: "app/index.html",
//     //         controller: "Table"
//     //     })
//     //     .when("/calendar", {
//     //         templateUrl: "calendar.html",
//     //         controller: "calendar"
//     //     })
//     //     .when("/mailbox", {
//     //         templateUrl: "mailbox.html",
//     //         controller: "mailbox"
//     //     })
//     //     .when("/login", {
//     //         templateUrl: "login.html",
//     //         controller: "login"
//     //     })
//     //     .when("/register", {
//     //         templateUrl: "register.html",
//     //         controller: "register"
//     //     })
//     //     // .otherwise({
//     //     //     redirectTo: "/"
//     //     // })
// }])

app.controller('Table', ["$scope", "$firebaseObject", function($scope, $firebaseObject) {
    // create a synchronized array with a customized version

    var ref = new Firebase('https://cleanapps.firebaseio.com/orders');
    var obj = $firebaseObject(ref);

    // to take an action after the data loads, use the $loaded() promise
    $scope.phones = []
    obj.$loaded().then(function() {

        // To iterate the key/value pairs of the object, use angular.forEach()
        angular.forEach(obj, function(value, key) {
            $scope.phones.push(value)
        });
    });
}]);

app.controller("calendar", ["$scope", "$firebaseObject", function($scope, $firebaseObject) {}]);
app.controller("mailbox", ["$scope", "$firebaseObject", function($scope, $firebaseObject) {}]);
app.controller("register", ["$scope", "$firebaseObject", function($scope, $firebaseObject) {}]);
app.controller("login", ["$scope", "$firebaseObject", function($scope, $firebaseObject) {}]);