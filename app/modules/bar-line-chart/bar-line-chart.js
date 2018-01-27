define([
	'ui-bootstrap',
    'highstocks',
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
                                byIndustry[industry] = [key];

                            var array = byIndustry[industry];
                            value = item[key][industry] == undefined ? 0 : item[key][industry];
                            byMonth[key] += value;
                            array.push(value);
                        });
                    });

                    // var numberOfPostings = [];
                    // _.forEach(byMonth, function(value, key) {
                    //     numberOfPostings.push(value);
                    // });

                     var series = [];
                     // [{name: 'Total postings', data: numberOfPostings, type: 'column'}];

                    _.forEach(byIndustry, function(value, key){
                        series.push({ name: key, data: value, zoomType: 'spline' });
                    });

                    console.log(series);

                    Highcharts.stockChart(element[0], {
                        rangeSelector: {
                            selected: 1
                        },
                        chart: {
                            height: '100%',
                            zoomType: 'x'
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
                        tooltip: {
                            split: true,
                            shared: false
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

    barLineChartModule.directive('barLineChartDirective', BarLineChartDirective);
});