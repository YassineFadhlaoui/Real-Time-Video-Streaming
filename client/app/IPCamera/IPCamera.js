'use strict';

angular.module('myApp.IPCamera', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/IPCamera', {
    templateUrl: 'IPCamera/IPCamera.html',
    controller: 'IPCameraCtrl'
  });
}])

.controller('IPCameraCtrl', [function() {

}]);
