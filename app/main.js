// This file is mainly to load dependencies in lazy-load (on-demand) manner

require.config({
    baseUrl: '',    
    paths: {
    	'angular': 'libs/angular/angular',
    	'angular-amd': 'libs/angular-amd/angularAMD',
        'angular-animate': 'libs/angular-animate/angular-animate.min',
        'angular-aria': 'libs/angular-aria/angular-aria.min',
        'angular-ui-router': 'libs/angular-ui-router/angular-ui-router.min',
        'ui-bootstrap': 'libs/ui-bootstrap/ui-bootstrap.min',
        'ui-grid-info': 'libs/ui-grid.info/ui-grid.min',
        'highcharts': 'libs/highstocks/highstock.src',
        'lodash': 'libs/lodash/lodash',
        'chart-table': 'modules/chart-table/chart-table',
        'chart1': 'modules/chart1/chart1',
        'chart2': 'modules/chart2/chart2',
        'column-chart': 'modules/column-chart/column-chart',
        'column-line-chart': 'modules/column-line-chart/column-line-chart',
        'table': 'modules/table/table',
        'progress-circle': 'modules/progress-circle/progress-circle'
    },
    shim: {
    	'angular-amd': {
    		deps: ['angular']
    	},
        'angular-animate': {
            deps: ['angular']
        },
        'angular-aria': {
            deps: ['angular']
        },
    	'ui-bootstrap': {
            deps: ['angular', 'angular-animate', 'angular-aria']
        },
        'ui-grid-info': {
            deps: ['angular', 'angular-animate', 'angular-aria']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'progress-circle': {
            deps: ['ui-bootstrap']
        },
        'chart-table': {
            deps: ['ui-bootstrap', 'table']
        },
        'chart1': {
            deps: ['ui-bootstrap', 'column-chart']
        },
        'chart2': {
            deps: ['ui-bootstrap', 'column-line-chart']
        },
        'column-chart': {
            deps: ['ui-bootstrap', 'highcharts', 'lodash', 'progress-circle']
        },
        'column-line-chart': {
            deps: ['ui-bootstrap', 'highcharts', 'lodash', 'progress-circle']
        },
        'table': {
            deps: ['ui-bootstrap', 'ui-grid-info']
        }
    },
    deps: ['app']
});