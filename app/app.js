define([
	'angular-amd',
  'ui-bootstrap',
  'angular-ui-router',
  'home'
	], function (angularAMD) {
    'use strict';
    
    var app = angular.module("app", ['ui.bootstrap', 'ui.router', 'home']);
    app.config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
      $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'modules/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        });
    });
    return angularAMD.bootstrap(app);
});