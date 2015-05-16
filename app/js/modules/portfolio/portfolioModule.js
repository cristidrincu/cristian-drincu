"use strict";

angular.module('cristiandrincu.portfolioModule', [
		'cristiandrincu.portfolio.services',
		'cristiandrincu.portfolio.controllers',
		'cristiandrincu.portfolio.directives',
		'ui.router'
	])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider){

		$stateProvider.state('allProjects', {
			url: '/portfolio',
			template:"<ui-view></ui-view>",
			abstract: true
		}).state('allProjects.projects', {
				url: '/projects?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allProjects.projectDetail', {
				url: '/project-detail/:id',
				templateUrl: 'js/modules/portfolio/views/portfolio-details.html',
				controller: 'PortfolioDetailsController'
		});

		$urlRouterProvider.otherwise("/portfolio/projects?year=2007&type=web development")
	}]);
