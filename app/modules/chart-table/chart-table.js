define([
	'ui-bootstrap',
    'table'
], function () {
    'use-strict';
    
	var chartTableModule = angular.module('chart-table', ['ui.bootstrap', 'table']);
	
    ChartTableCtrl.$inject = [];
    function ChartTableCtrl() {
        var self = this;
        self.title = 'Chart data';
        self.description = 'This page is intended to display the records used to populate the charts in another two tabs.';
        self.note = 'P.s. You are allowed to make changes to the records. Once complete updating records, click Save button to commit the changes to database.';
    }

    chartTableModule.controller('ChartTableCtrl', ChartTableCtrl);
});