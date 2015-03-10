angular.module('cristiandrincu.portfolioModule', [
		'cristiandrincu.portfolio.services',
		'cristiandrincu.portfolio.controllers',
		'cristiandrincu.portfolio.directives',
		'ui.router'
	])
	.config(['$stateProvider', '$locationProvider', function($stateProvider){

		var constants = {
				urlWebDevelopment : "/cristian-drincu/web-development",
				urlGraphicDesign : "/cristian-drincu/graphic-design",
				urlPersonalProjects: "/cristian-drincu/personal-projects"
		}

		$stateProvider.state('projectDetail', {
			url: '/project-detail/:id',
			templateUrl: 'js/modules/portfolio/views/portfolio-details.html',
			controller: 'PortfolioDetailsController'
		});

		$stateProvider.state('allProjects', {
			url: '/portfolio',
			template:"<ui-view></ui-view>",
			abstract: true
		}).state('allProjects.projects2007', {
				url: constants.urlWebDevelopment + '/2007?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2008', {
				url: constants.urlWebDevelopment + '/2008?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2009', {
				url: constants.urlWebDevelopment + '/2009?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2010', {
				url: constants.urlWebDevelopment + '/2010?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2011', {
				url: constants.urlWebDevelopment + '/2011?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2012', {
				url: constants.urlWebDevelopment + '/2012?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		});

		$stateProvider.state('allGraphicsProjects', {
			url: '/projects-graphic-design?year&type',
			template: '<ui-view></ui-view>',
			abstract: true
		}).state('allGraphicsProjects.projectsGraphic2007', {
				url: constants.urlGraphicDesign  + '/2007?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2008', {
				url: constants.urlGraphicDesign + '/2008?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2009', {
				url: constants.urlGraphicDesign + '/2009?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2010', {
				url: constants.urlGraphicDesign + '/2010?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2011', {
				url: constants.urlGraphicDesign + '/2011?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2012', {
				url: constants.urlGraphicDesign + '/2012?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		});

		$stateProvider.state('allPersonalProjects', {
			url: '/personal-projects?year&type',
			template: '<ui-view></ui-view>',
			abstract: true
		}).state('allPersonalProjects.personal2014', {
				url: constants.urlPersonalProjects + '/2014?year&type',
				templateUrl: '/js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allPersonalProjects.personal2015', {
				url: constants.urlPersonalProjects + '/2015?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		});
	}]);
