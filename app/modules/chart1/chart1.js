define([
	'ui-bootstrap',
    'column-chart',
], function () {
    'use-strict';
    
	var chart1Module = angular.module('chart1', ['ui.bootstrap', 'column-chart']);
	
    Chart1Ctrl.$inject = [];
    function Chart1Ctrl() {
        var self = this;
        self.title = 'Number of positions posted by industries aggregated by positions';
        self.description = 'This chart summarizes the number of postings by every industry. To make the chart even more signicant, number of postings by each industry have been aggregated based on positions.';
    }

    chart1Module.controller('Chart1Ctrl', Chart1Ctrl);
});