define([
	'ui-bootstrap',
    'column-line-chart',
], function () {
    'use-strict';
    
    // Configuration of chart2 module (Appears as Chart 2 in navigation bar options)
	var chart2Module = angular.module('chart2', ['ui.bootstrap', 'column-line-chart']);
	
    Chart2Ctrl.$inject = [];
    function Chart2Ctrl() {
        var self = this;
        self.title = 'Total number of positions posted against number of positions posted by every industry over certain timeframe';
        self.description = 'This chart summarizes number of positions posted over certain timeframe. It includes detailed information on the number of positions by every industry against the total number of positions.';
    }

    chart2Module.controller('Chart2Ctrl', Chart2Ctrl);
});