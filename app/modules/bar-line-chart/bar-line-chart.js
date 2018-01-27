define([
	'ui-bootstrap',
    'highcharts',
    'lodash'
], function () {
    'use-strict';

	var barLineChartModule = angular.module('bar-line-chart', ['ui.bootstrap']);

    BarLineChartDirective.$inject = ['$http'];
    function BarLineChartDirective($http) {
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            templateUrl: 'modules/bar-line-chart/bar-line-chart.html',
            link: function(scope, element, attrs) {
                $http({
                    method: 'GET',
                    url: 'https://us-central1-sample-charting.cloudfunctions.net/numberOfPostingsByMonthPerIndustry'
                })
                .then(function(response) {
                    var data = response.data;
                    console.log(data)

                    var categories = [];
                    var object = {};

                    _.forEach(data, function(item) {
                        var key = Object.keys(item)[0];
                        categories.push(key);

                        object = _.mergeWith(object, item[key], function customizer(objValue, srcValue) {
                            if (objValue) {
                                return (objValue + srcValue);
                            } else {
                                return (0 + srcValue);
                            }
                        });
                    });

                    console.log(object);

                    // var series = [];

                    // _.forEach(object, function(value, key){
                    //     series.push({ name: key, data: value });
                    // });
                });
            }
        };
    }

    barLineChartModule.directive('barLineChartDirective', BarLineChartDirective);
});