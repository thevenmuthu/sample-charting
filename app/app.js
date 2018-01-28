define([
	'angular-amd',
  'ui-bootstrap',
  'angular-ui-router',
  'chart-table',
  'chart1',
  'chart2'
	], function (angularAMD) {
    'use strict';
    
    var app = angular.module("app", ['ui.bootstrap', 'ui.router', 'chart-table', 'chart1', 'chart2']);
    app.config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
      $stateProvider
        .state('chart-table', {
            url: '/chartTable',
            templateUrl: 'modules/chart-table/chart-table.html',
            controller: 'ChartTableCtrl',
            controllerAs: 'chartTable'
        })
        .state('chart1', {
            url: '/chart1',
            templateUrl: 'modules/chart1/chart1.html',
            controller: 'Chart1Ctrl',
            controllerAs: 'chart1'
        })
        .state('chart2', {
            url: '/chart2',
            templateUrl: 'modules/chart2/chart2.html',
            controller: 'Chart2Ctrl',
            controllerAs: 'chart2'
        });
    });
    return angularAMD.bootstrap(app);
});