define([
	'ui-bootstrap',
    'table'
], function () {
    'use-strict'
    
	var chartTableModule = angular.module('chartTable', ['ui.bootstrap', 'table']);
	
    ChartTableCtrl.$inject = [];
    function ChartTableCtrl() {
        var self = this;
        self.title = 'Chart Table Page';
    }

    chartTableModule.controller('ChartTableCtrl', ChartTableCtrl);
});