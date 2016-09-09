'use strict';

angular.module('myApp.Stream', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Stream', {
    templateUrl: 'Stream/Stream.html',
    controller: 'StreamCtrl'
  });
}])

.controller('StreamCtrl', [function() {

}]);
