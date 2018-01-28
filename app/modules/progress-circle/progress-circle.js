define([
	'ui-bootstrap',
], function () {
    'use-strict';

	var progressCircleModule = angular.module('progress-circle', ['ui.bootstrap']);

    ProgressCircleDirective.$inject = ['$http'];
    function ProgressCircleDirective($http) {
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            templateUrl: 'modules/progress-circle/progress-circle.html',
            link: function(scope, element, attrs) {
            }
        };
    }

    progressCircleModule.directive('progressCircleDirective', ProgressCircleDirective);
});