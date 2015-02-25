angular.module('cristiandrincu.portfolioModule', [
		'cristiandrincu.portfolio.services',
		'cristiandrincu.portfolio.controllers',
		'cristiandrincu.portfolio.directives',
		'ui.router'])
	.config(['$stateProvider', '$locationProvider', function($stateProvider){
		var urlWebDevelopment = '/cristian-drincu/web-development';
		var urlGraphicDesign = '/cristian-drincu/graphic-design';
		var urlPersonalProjects = '/cristian-drincu/personal-projects';

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
				url: urlWebDevelopment + '/2007?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2008', {
				url: urlWebDevelopment + '/2008?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2009', {
				url: urlWebDevelopment + '/2009?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2010', {
				url: urlWebDevelopment + '/2010?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2011', {
				url: urlWebDevelopment + '/2011?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2012', {
				url: urlWebDevelopment + '/2012?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		});

		$stateProvider.state('allGraphicsProjects', {
			url: '/projects-graphic-design?year&type',
			template: '<ui-view></ui-view>',
			abstract: true
		}).state('allGraphicsProjects.projectsGraphic2007', {
				url: urlGraphicDesign  + '/2007?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2008', {
				url: urlGraphicDesign + '/2008?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2009', {
				url: urlGraphicDesign + '/2009?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2010', {
				url: urlGraphicDesign + '/2010?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2011', {
				url: urlGraphicDesign + '/2011?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2012', {
				url: urlGraphicDesign + '/2012?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		});

		$stateProvider.state('allPersonalProjects', {
			url: '/personal-projects?year&type',
			template: '<ui-view></ui-view>',
			abstract: true
		}).state('allPersonalProjects.personal2014', {
				url: urlPersonalProjects + '/2014?year&type',
				templateUrl: '/js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		}).state('allPersonalProjects.personal2015', {
				url: urlPersonalProjects + '/2015?year&type',
				templateUrl: 'js/modules/portfolio/views/portfolio/portfolio-loading-template.html',
				controller: 'PortfolioController'
		});
	}])
	.run(function($rootScope, $location){
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams){
			console.log(toParams);
		});
	});
