angular.module('cristiandrincu.portfolio.controllers', [])
	.controller('PortfolioController', ['$state', '$scope', 'Portfolio', '$location', function ($state, $scope, Portfolio) {
		$scope.loadingProjects = true;

		//you can use an {} to configure the query - Portfolio.query({limit: limit}) for example
		Portfolio.query(function(projects){
			var projects2007 = _.filter(projects, function(project){
				return project.published === '2007' && project.type === 'web development';
			});

			var projects2008 = _.filter(projects, function(project){
				return project.published === '2008' && project.type === 'web development';
			});

			var projects2009 = _.filter(projects, function(project){
				return project.published === '2009' && project.type === 'web development';
			});

			var projects2010 = _.filter(projects, function(project){
				return project.published === '2010' && project.type === 'web development';
			});

			var projects2011 = _.filter(projects, function(project){
				return project.published === '2011' && project.type === 'web development';
			});

			var projects2012 = _.filter(projects, function(project){
				return project.published === '2012' && project.type === 'web development';
			});

			var projectsGraphic2007 = _.filter(projects, function(project){
				return project.published === '2007' && project.type === 'graphic design';
			});

			var projectsGraphic2008 = _.filter(projects, function(project){
				return project.published === '2008' && project.type === 'graphic design';
			});

			var projectsGraphic2009 = _.filter(projects, function(project){
				return project.published === '2009' && project.type === 'graphic design';
			});

			var projectsGraphic2010 = _.filter(projects, function(project){
				return project.published === '2010' && project.type === 'graphic design';
			});

			var projectsGraphic2011 = _.filter(projects, function(project){
				return project.published === '2011' && project.type === 'graphic design';
			});

			var projectsGraphic2012 = _.filter(projects, function(project){
				return project.published === '2012' && project.type === 'graphic design';
			});

			var projectsPersonal2014 = _.filter(projects, function(project){
				return project.published == '2014' && project.type === 'personal';
			});

			var projectsPersonal2015 = _.filter(projects, function(project){
				return project.published == '2015' && project.type === 'personal';
			});

			$scope.projects2007 = projects2007;
			$scope.projects2008 = projects2008;
			$scope.projects2009 = projects2009;
			$scope.projects2010 = projects2010;
			$scope.projects2011 = projects2011;
			$scope.projects2012 = projects2012;

			$scope.projectsGraphic2007 = projectsGraphic2007;
			$scope.projectsGraphic2008 = projectsGraphic2008;
			$scope.projectsGraphic2009 = projectsGraphic2009;
			$scope.projectsGraphic2010 = projectsGraphic2010;
			$scope.projectsGraphic2011 = projectsGraphic2011;
			$scope.projectsGraphic2012 = projectsGraphic2012;

			$scope.projectsPersonal2014 = projectsPersonal2014;
			$scope.projectsPersonal2015 = projectsPersonal2015;

			$scope.loadingProjects = false;
		});

		$scope.loadGraphicsProjects = function(){
			$state.go('allGraphicsProjects.projectsGraphic2007');
		}

		$scope.loadWebDevelopmentProjects = function(){
			$state.go('allProjects.projects2007');
		}

		$scope.loadPersonalProjects = function(){
			$state.go('allPersonalProjects.personal2014');
		}

	}])
	.controller('PortfolioDetailsController', ['$stateParams', '$scope', 'Portfolio', function ($stateParams, $scope, Portfolio) {
		Portfolio.get({id: $stateParams.id}, function(project){
			$scope.portfolioDetail = project;

			if(project.projectWebLink.length > 0){
				$scope.projectStatus = project.projectWebLink;
			}else{
				$scope.projectStatus = '';
			}
		});
	}])
