define([
	'angular-amd',
  'ui-bootstrap',
  'angular-ui-router',
  'home',
  'about'
	], function (angularAMD) {
    var app = angular.module("app", ['ui.bootstrap', 'ui.router', 'home', 'about']);
    app.config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
      $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'modules/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'modules/about/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
    });
    return angularAMD.bootstrap(app);
});