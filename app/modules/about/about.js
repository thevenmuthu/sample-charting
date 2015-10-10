(function() {
    'use strict';
    define([
    	'ui-bootstrap'
    	], function () {
    		var aboutModule = angular.module('about', ['ui.bootstrap']);
    		aboutModule.controller('AboutCtrl', function(){
    			var self = this;
    			self.title = 'About Page';
    		}
    	)
    });
})();