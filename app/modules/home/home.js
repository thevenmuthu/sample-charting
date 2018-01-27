define([
	'ui-bootstrap',
    'column-chart'
], function () {
    'use-strict';

	var homeModule = angular.module('home', ['ui.bootstrap', 'column-chart']);
	
    HomeCtrl.$inject = [];
    function HomeCtrl() {
        var self = this;
        self.title = 'Home Page';
    }

    homeModule.controller('HomeCtrl', HomeCtrl);
});