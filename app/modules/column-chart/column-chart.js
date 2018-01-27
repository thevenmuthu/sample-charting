define([
	'ui-bootstrap',
    'highcharts'
], function () {
    'use-strict';

	var columnChartModule = angular.module('column-chart', ['ui.bootstrap']);

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
                    url: 'https://us-central1-sample-charting.cloudfunctions.net/numberOfPostingsByPositionsPerIndustry'
                })
                .then(function(response) {
                    var data = response.data;
                    console.log(data)
                    
                    Highcharts.chart(element[0], {
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: 'Number of postings (by positions) over industries'
                        },
                        xAxis: {
                            categories: [
                                'Jan',
                                'Feb',
                                'Mar',
                                'Apr',
                                'May',
                                'Jun',
                                'Jul',
                                'Aug',
                                'Sep',
                                'Oct',
                                'Nov',
                                'Dec'
                            ],
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
                        series: [{
                            name: 'Tokyo',
                            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

                        }, {
                            name: 'New York',
                            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

                        }, {
                            name: 'London',
                            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

                        }, {
                            name: 'Berlin',
                            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
                        }]
                    });
                }, function(error) {
                    console.error(error);
                });
            }
        };
    }

    columnChartModule.directive('columnChartDirective', ColumnChartDirective);
});