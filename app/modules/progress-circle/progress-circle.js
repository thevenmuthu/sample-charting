define([
	'ui-bootstrap',
], function () {
    'use-strict';

    // Configuration of progress-circle directive
    // Purpose: This is an UI-related module that shows loading spinner.
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