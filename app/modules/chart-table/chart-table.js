define([
	'ui-bootstrap',
    'table'
], function () {
    'use-strict';
    
    // Configuration of chart-table module (Appears as Chart table in navigation bar options)
	var chartTableModule = angular.module('chart-table', ['ui.bootstrap', 'table']);
	
    ChartTableCtrl.$inject = [];
    function ChartTableCtrl() {
        var self = this;
        self.title = 'Chart data';
        self.description = 'This page is intended to display the records used to populate the charts in another two tabs.';
    }

    chartTableModule.controller('ChartTableCtrl', ChartTableCtrl);
});