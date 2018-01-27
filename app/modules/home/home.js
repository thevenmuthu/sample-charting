define([
	'ui-bootstrap',
    'column-chart',
    'column-line-chart',
    'table'
], function () {
    'use-strict'
    
	var homeModule = angular.module('home', ['ui.bootstrap', 'column-chart', 'column-line-chart', 'table']);
	
    HomeCtrl.$inject = [];
    function HomeCtrl() {
        var self = this;
        self.title = 'Home Page';
    }

    homeModule.controller('HomeCtrl', HomeCtrl);
});