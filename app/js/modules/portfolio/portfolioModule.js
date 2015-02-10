angular.module('cristiandrincu.portfolioModule', [
		'cristiandrincu.portfolio.services',
		'cristiandrincu.portfolio.controllers',
		'cristiandrincu.portfolio.directives',
		'ui.router'])
	.config(['$stateProvider', '$locationProvider', function($stateProvider){

		$stateProvider.state('projectDetail', {
			url: '/project-detail/:id',
			templateUrl: 'js/modules/portfolio/views/portfolio-details.html',
			controller: 'PortfolioDetailsController'
		});

		$stateProvider.state('allProjects', {
			url: '/portfolio?year&type',
			templateUrl: 'js/modules/portfolio/views/partials/portfolio.html',
			controller: 'PortfolioController',
			abstract: true
		}).state('allProjects.projects2007', {
				url: '',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2008', {
				url: '/2008?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2009', {
				url: '/2009?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2010', {
				url: '/2010?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2011', {
				url: '/2011?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2012', {
				url: '/2012?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		});

		$stateProvider.state('allGraphicsProjects', {
			url: '/projects-graphic-design?year&type',
			templateUrl: 'js/modules/portfolio/views/partials/portfolio-graphic.html',
			controller: 'PortfolioController',
			abstract: true
		}).state('allGraphicsProjects.projectsGraphic2007', {
				url: '',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2008', {
				url: '/2008?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2009', {
				url: '/2009?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2010', {
				url: '/2010?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2011', {
				url: '/2011?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2012', {
				url: '/2012?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		});

		$stateProvider.state('allPersonalProjects', {
			url: '/personal-projects?year&type',
			templateUrl: 'js/modules/portfolio/views/partials/portfolio-personal.html',
			controller: 'PortfolioController',
			abstract: true
		}).state('allPersonalProjects.personal2014', {
				url: '',
				templateUrl: '/js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allPersonalProjects.personal2015', {
				url: '/2015?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		});
	}]);
