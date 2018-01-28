define([
	'ui-bootstrap',
    'column-line-chart',
], function () {
    'use-strict'
    
	var chart2Module = angular.module('chart2', ['ui.bootstrap', 'column-line-chart']);
	
    Chart2Ctrl.$inject = [];
    function Chart2Ctrl() {
        var self = this;
        self.title = 'Chart 2 Page';
    }

    chart2Module.controller('Chart2Ctrl', Chart2Ctrl);
});