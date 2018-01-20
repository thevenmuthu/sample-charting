define([
	'ui-bootstrap',
    'firebase-app',
    'firebase-database',
], function () {
	var homeModule = angular.module('home', ['ui.bootstrap']);
	
    HomeCtrl.$inject = ['HomeService'];
    function HomeCtrl(HomeService) {
        var self = this;
        self.title = 'Home Page';

        HomeService.getData(function(data) {
            console.log(data);
        });
    }

    HomeService.$inject = [];
    function HomeService() {
        var self = this;
        var firebaseObj = firebase.initializeApp({
            apiKey: "AIzaSyAGoMt9gg5Mo2iRxdrjxIT0Pj_MJYlOrb8",
            authDomain: "sample-charting.firebaseapp.com",
            databaseURL: "https://sample-charting.firebaseio.com",
            projectId: "sample-charting",
            storageBucket: "sample-charting.appspot.com",
            messagingSenderId: "411010050918"
        });

        self.getData =  function(callback)
        {
            firebaseObj
                .database()
                .ref('/data')
                .orderByKey()
                .on('value', function (dataSnapshot) {
                    callback(dataSnapshot.val());
                }, function (errorObject) {
                    console.log("The read failed: " + errorObject.code);
                });
        }
    }

    homeModule.controller('HomeCtrl', HomeCtrl);
    homeModule.service('HomeService', HomeService);
});