define([
	'ui-bootstrap',
    'highcharts',
    'lodash',
    'progress-circle'
], function () {
    'use-strict';

	var columnChartModule = angular.module('column-chart', ['ui.bootstrap', 'progress-circle']);

    ColumnChartDirective.$inject = ['$http'];
    function ColumnChartDirective($http) {
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            templateUrl: 'modules/column-chart/column-chart.html',
            link: function(scope, element, attrs) {
                $http({
                    method: 'GET',
                    url: 'https://us-central1-sample-charting-2.cloudfunctions.net/numberOfPostingsByPositionsPerIndustry'
                })
                .then(function(response) {
                    var data = response.data;

                    var categories = [];
                    var object = {};

                    _.forEach(data, function(item) {
                        var key = Object.keys(item)[0];
                        categories.push(key);

                        object = _.mergeWith(object, item[key], function customizer(objValue, srcValue) {
                            if (_.isArray(objValue)) {
                                return objValue.concat(srcValue);
                            } else {
                                return [].concat(srcValue);
                            }
                        });
                    });

                    var series = [];

                    _.forEach(object, function(value, key){
                        series.push({ name: key, data: value });
                    });
                    
                    Highcharts.chart(element[0], {
                        chart: {
                            type: 'column',
                            className: 'custom-container custom-chart',
                            height: '100%',
                            zoomType: 'x'
                        },
                        title: {
                            text: 'Number of postings (by positions) over industries'
                        },
                        xAxis: {
                            categories: categories,
                            title: 'Industries',
                            crosshair: true
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'Number of postings'
                            }
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>{point.y}</b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 0.2,
                                borderWidth: 0
                            }
                        },

                        series: series
                    });
                }, function(error) {
                    console.error(error);
                });
            }
        };
    }

    columnChartModule.directive('columnChartDirective', ColumnChartDirective);
});