angular.module('cristiandrincu.portfolioModule', [
		'cristiandrincu.portfolio.services',
		'cristiandrincu.portfolio.controllers',
		'cristiandrincu.portfolio.directives',
		'ui.router'])
	.config(['$stateProvider', '$locationProvider', function($stateProvider){
		$stateProvider.state('allProjects', {
			url: '/portfolio',
			templateUrl: 'js/modules/portfolio/views/partials/portfolio.html',
			controller: 'PortfolioController',
			abstract: true
		}).state('projectDetail', {
				url: '/project-detail/:id',
				templateUrl: 'js/modules/portfolio/views/portfolio-details.html',
				controller: 'PortfolioDetailsController'
		}).state('allProjects.projects2007', {
				url: '',
				templateUrl: 'js/modules/portfolio/views/web-development/portfolio2007.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2008', {
				url: '/projects/2008',
				templateUrl: 'js/modules/portfolio/views/web-development/portfolio2008.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2009', {
				url: '/projects/2009',
				templateUrl: 'js/modules/portfolio/views/web-development/portfolio2009.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2010', {
				url: '/projects/2010',
				templateUrl: 'js/modules/portfolio/views/web-development/portfolio2010.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2011', {
				url: '/projects/2011',
				templateUrl: 'js/modules/portfolio/views/web-development/portfolio2011.html',
				controller: 'PortfolioController'
		}).state('allProjects.projects2012', {
				url: '/projects/2012',
				templateUrl: 'js/modules/portfolio/views/web-development/portfolio2012.html',
				controller: 'PortfolioController'
		});

		$stateProvider.state('allGraphicsProjects', {
			url: '/projects-graphic-design',
			templateUrl: 'js/modules/portfolio/views/partials/portfolio-graphic.html',
			controller: 'PortfolioController',
			abstract: true
		}).state('allGraphicsProjects.projectsGraphic2007', {
				url: '',
				templateUrl: 'js/modules/portfolio/views/graphic-design/portfolio-graphic-2007.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2008', {
				url: '/2008',
				templateUrl: 'js/modules/portfolio/views/graphic-design/portfolio-graphic-2008.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2009', {
				url: '/2009',
				templateUrl: 'js/modules/portfolio/views/graphic-design/portfolio-graphic-2009.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2010', {
				url: '/2010',
				templateUrl: 'js/modules/portfolio/views/graphic-design/portfolio-graphic-2010.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2011', {
				url: '/2011',
				templateUrl: 'js/modules/portfolio/views/graphic-design/portfolio-graphic-2011.html',
				controller: 'PortfolioController'
		}).state('allGraphicsProjects.projectsGraphic2012', {
				url: '/2012',
				templateUrl: 'js/modules/portfolio/views/graphic-design/portfolio-graphic-2012.html',
				controller: 'PortfolioController'
		});

		$stateProvider.state('allPersonalProjects', {
			url: '/personal-projects',
			templateUrl: 'js/modules/portfolio/views/partials/portfolio-personal.html',
			controller: 'PortfolioController',
			abstract: true
		}).state('allPersonalProjects.personal2014', {
				url: '',
				templateUrl: '/js/modules/portfolio/views/personal-projects/personal-projects-2014.html',
				controller: 'PortfolioController'
		}).state('allPersonalProjects.personal2015', {
				url: '/2015',
				templateUrl: 'js/modules/portfolio/views/personal-projects/personal-projects-2015.html',
				controller: 'PortfolioController'
		})
	}]);
