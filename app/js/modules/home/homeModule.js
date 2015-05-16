"use strict";

angular.module('cristiandrincu.homeModule', ['cristiandrincu.home.controllers', 'ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
		$stateProvider.state('homePage', {
			url: '/',
			templateUrl: 'js/modules/home/views/home.html',
			controller: 'HomeController'
		});

		$urlRouterProvider.otherwise('/');
	}]);