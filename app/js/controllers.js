'use strict';
//var fb = new Firebase('https://cleanapps.firebaseio.com/orders');

/* Controllers */

var app = angular.module('app', ["firebase"]);

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