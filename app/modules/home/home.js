(function() {
    'use strict';
    define([
    	'ui-bootstrap'
    	], function () {
    		var homeModule = angular.module('home', ['ui.bootstrap']);
    		homeModule.controller('HomeCtrl', function(){
                var self = this;
    			self.title = 'Home Page';
    		}
    	);
    });
})();