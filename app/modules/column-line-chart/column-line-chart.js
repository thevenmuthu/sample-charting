define([
	'ui-bootstrap',
    'highcharts',
    'lodash',
    'progress-circle'
], function () {
    'use-strict';

	var columnLineChartModule = angular.module('column-line-chart', ['ui.bootstrap', 'progress-circle']);

    ColumnLineChartDirective.$inject = ['$http'];
    function ColumnLineChartDirective($http) {
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            templateUrl: 'modules/column-line-chart/column-line-chart.html',
            link: function(scope, element, attrs) {
                $http({
                    method: 'GET',
                    url: 'https://us-central1-sample-charting-2.cloudfunctions.net/numberOfPostingsByMonthPerIndustry'
                })
                .then(function(response) {
                    var data = response.data;

                    var categories = [];
                    var industries = [];

                    _.forEach(data, function(item) {
                        var key = Object.keys(item)[0];

                        _.forEach(item[key], function(value, key) {
                            if(!_.includes(industries, key))
                                industries.push(key);
                        });
                    });

                    var byIndustry = {};
                    var byMonth = {};

                    _.forEach(data, function(item) {
                        var key = Object.keys(item)[0];

                        if(!byMonth.hasOwnProperty(key))
                            byMonth[key] = 0;

                         _.forEach(industries, function(industry) {
                            if(!byIndustry.hasOwnProperty(industry))
                                byIndustry[industry] = [];

                            var value = item[key][industry] == undefined ? 0 : item[key][industry];
                            byMonth[key] += value;
                            byIndustry[industry].push([parseInt(key), value]);
                        });
                    });

                    var numberOfPostings = [];
                    _.forEach(byMonth, function(value, key) {
                        numberOfPostings.push([parseInt(key), value]);
                    });

                     var series = [{name: 'Total postings', data: numberOfPostings, type: 'column'}];

                    _.forEach(byIndustry, function(value, key){
                        series.push({ name: key, data: value, type: 'spline' });
                    });

                    Highcharts.stockChart(element[0], {
                        rangeSelector: {
                            enabled: false
                        },
                        chart: {
                            height: '100%',
                            zoomType: 'x',
                            className: 'custom-container custom-chart'
                        },
                        title: {
                            text: 'Total number of postings against postings by industries every month'
                        },
                        xAxis: {
                            type: 'datetime'
                        },                        
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'Number of postings'
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        navigator: {
                            enabled: false
                        },
                        scrollbar: {
                            enabled: false
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>{point.y}</b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true,
                            split: false
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 0.2,
                                borderWidth: 0
                            }
                        },
                        series: series
                    });
                });
            }
        };
    }

    columnLineChartModule.directive('columnLineChartDirective', ColumnLineChartDirective);
});