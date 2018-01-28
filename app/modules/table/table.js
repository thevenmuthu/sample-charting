define([
	'ui-bootstrap',
    'ui-grid-info',
    'progress-circle'
], function () {
    'use-strict';

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
                scope.format = 'dd-MM-yyyy';
                scope.openTimepicker = function() {
                    scope.opened = true;
                };

                scope.resetFields = function() {
                  
                };

                scope.addRecord = function() {

                };

                // $http({
                //     method: 'GET',
                //     url: 'https://us-central1-sample-charting-2.cloudfunctions.net/postingData'
                // })
                // .then(function(response) {
                //     scope.showTable = true;
                //     scope.gridOptions = {
                //         data: response.data,
                //         enableSorting: true,
                //         enableCellEditOnFocus: true
                //     };

                // }, function(error) {
                //     console.error(error);
                // });
            }
        };
    }

    //  function disabled(data) {
    //     console.log(data)
    //     var date = data.date,
    //     mode = data.mode;
    //     return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    // }

    tableModule.directive('tableDirective', TableDirective);
});