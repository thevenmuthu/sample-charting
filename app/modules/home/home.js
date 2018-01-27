define([
	'ui-bootstrap',
    'column-chart',
    'bar-line-chart'
], function () {
    'use-strict'
    
	var homeModule = angular.module('home', ['ui.bootstrap', 'column-chart', 'bar-line-chart']);
	
    HomeCtrl.$inject = [];
    function HomeCtrl() {
        var self = this;
        self.title = 'Home Page';
    }

    homeModule.controller('HomeCtrl', HomeCtrl);
});