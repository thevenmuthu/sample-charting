require.config({
    baseUrl: '',    
    paths: {
    	'angular': 'libs/angular/angular',
    	'angular-amd': 'libs/angular-amd/angularAMD',
        'angular-animate': 'libs/angular-animate/angular-animate.min',
        'angular-aria': 'libs/angular-aria/angular-aria.min',
        'angular-ui-router': 'libs/angular-ui-router/angular-ui-router.min',
        'ui-bootstrap': 'libs/ui-bootstrap/ui-bootstrap.min',
        'highcharts': 'libs/highcharts/highcharts',
        'highstocks': 'libs/highstocks/highstocks',
        'lodash': 'libs/lodash/lodash',
        'home': 'modules/home/home',
        'column-chart': 'modules/column-chart/column-chart'
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
        'angular-ui-router': {
            deps: ['angular']
        },
        'home': {
            deps: ['ui-bootstrap']
        },
        'column-chart': {
            deps: ['ui-bootstrap', 'lodash']
        }
    },
    deps: ['app']
});