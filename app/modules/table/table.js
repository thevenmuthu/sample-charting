define([
	'ui-bootstrap',
    'ui-grid-info'
], function () {
    'use-strict';

	var tableModule = angular.module('table', ['ui.bootstrap', 'ui.grid']);

    TableDirective.$inject = ['$http'];
    function TableDirective($http) {
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            templateUrl: 'modules/table/table.html',
            link: function(scope, element, attrs) {
                scope.gridOptions = {};

                $http({
                    method: 'GET',
                    url: 'https://us-central1-sample-charting-2.cloudfunctions.net/postingData'
                })
                .then(function(response) {
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