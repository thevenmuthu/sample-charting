define([
	'ui-bootstrap',
    'column-chart',
], function () {
    'use-strict'
    
	var chart1Module = angular.module('chart1', ['ui.bootstrap', 'column-chart']);
	
    Chart1Ctrl.$inject = [];
    function Chart1Ctrl() {
        var self = this;
        self.title = 'Chart 1 Page';
    }

    chart1Module.controller('Chart1Ctrl', Chart1Ctrl);
});