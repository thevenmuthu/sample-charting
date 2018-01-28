define([
	'ui-bootstrap',
    'ui-grid-info',
    'progress-circle'
], function () {
    'use-strict';
    // Configuration of table directive
    // Purpose: Loads and shows data from database in table form.
	var tableModule = angular.module('table', ['ui.bootstrap', 'ui.grid', 'progress-circle']);

    TableDirective.$inject = ['$http'];
    function TableDirective($http) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'modules/table/table.html',
            link: function(scope, element, attrs) {
                scope.gridOptions = {};
                scope.showTable = false;

                // HTTP call to retrieve data from database, in this case, the chosen database is Firebase
                $http({
                    method: 'GET',
                    url: 'https://us-central1-sample-charting-2.cloudfunctions.net/postingData'
                })
                .then(function(response) {
                    scope.showTable = true;
                    scope.gridOptions = {
                        data: response.data,
                        enableSorting: true,
                        enableCellEditOnFocus: true
                    };

                }, function(error) {
                    console.error(error);
                });
            }
        };
    }

    tableModule.directive('tableDirective', TableDirective);
});