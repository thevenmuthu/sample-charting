define([
	'ui-bootstrap',
    'column-chart'
], function () {
<<<<<<< HEAD
    'use-strict'

	var homeModule = angular.module('home', ['ui.bootstrap']);
=======
    'use-strict';

	var homeModule = angular.module('home', ['ui.bootstrap', 'column-chart']);
>>>>>>> feature/enable-first-chart
	
    HomeCtrl.$inject = [];
    function HomeCtrl() {
        var self = this;
        self.title = 'Home Page';
    }

    homeModule.controller('HomeCtrl', HomeCtrl);
});